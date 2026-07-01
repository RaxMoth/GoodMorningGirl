import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, Search, Settings, User } from "lucide-react";
import { useAppStore } from "../../stores/useAppStore";
import { useAuthStore } from "../../stores/useAuthStore";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ThemeToggle } from "../ThemeToggle";

export function Topbar() {
    const setMobileNavOpen = useAppStore((s) => s.setMobileNavOpen);
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();

    const initials = (user?.name ?? "Demo User")
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
            <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Open menu"
            >
                <Menu className="size-5" />
            </Button>

            <div className="relative hidden max-w-md flex-1 sm:block">
                <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search…" className="pl-9" />
            </div>

            <div className="ml-auto flex items-center gap-1">
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="ml-1 rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring">
                            <Avatar className="size-9">
                                {user?.avatar && (
                                    <AvatarImage src={user.avatar} alt="" />
                                )}
                                <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>
                            <div className="flex flex-col">
                                <span>{user?.name ?? "Demo User"}</span>
                                <span className="text-xs font-normal text-muted-foreground">
                                    {user?.email ?? "demo@example.com"}
                                </span>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link to="/app/settings">
                                <User /> Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <Link to="/app/settings">
                                <Settings /> Settings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => {
                                logout();
                                navigate("/login");
                            }}
                        >
                            <LogOut /> Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}
