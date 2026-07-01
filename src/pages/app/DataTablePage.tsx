import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Plus } from "lucide-react";
import { toast } from "sonner";
import { Seo } from "../../components/Seo";
import { PageHeader } from "../../components/PageHeader";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { DataTable } from "../../components/data/DataTable";
import { users, type UserRecord } from "../../lib/mock-data";
import { formatCurrency } from "../../utils/helpers";

const statusVariant = {
    active: "success",
    invited: "secondary",
    suspended: "destructive",
} as const;

const columns: ColumnDef<UserRecord>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (
            <div>
                <p className="font-medium">{row.original.name}</p>
                <p className="text-xs text-muted-foreground">
                    {row.original.email}
                </p>
            </div>
        ),
    },
    { accessorKey: "role", header: "Role" },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <Badge variant={statusVariant[row.original.status]}>
                {row.original.status}
            </Badge>
        ),
    },
    {
        accessorKey: "revenue",
        header: "Revenue",
        cell: ({ row }) => (
            <span className="font-medium">
                {formatCurrency(row.original.revenue)}
            </span>
        ),
    },
    {
        accessorKey: "lastActive",
        header: "Last active",
        cell: ({ row }) =>
            new Date(row.original.lastActive).toLocaleDateString(undefined, {
                month: "short",
                day: "numeric",
                year: "numeric",
            }),
    },
    {
        id: "actions",
        enableSorting: false,
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Row actions">
                        <MoreHorizontal className="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem
                        onClick={() =>
                            navigator.clipboard.writeText(row.original.email)
                        }
                    >
                        Copy email
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info("Edit user")}>
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => toast.error("User deleted")}
                    >
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
];

export default function DataTablePage() {
    return (
        <div className="space-y-6">
            <Seo title="Data Table" path="/app/data" noindex />
            <PageHeader
                title="Users"
                description="A sortable, searchable, paginated data grid."
                actions={
                    <Button onClick={() => toast.success("Invite sent")}>
                        <Plus /> Add user
                    </Button>
                }
            />
            <Card>
                <CardContent className="pt-6">
                    <DataTable
                        columns={columns}
                        data={users}
                        searchPlaceholder="Search users…"
                    />
                </CardContent>
            </Card>
        </div>
    );
}
