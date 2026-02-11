import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../components/UI/Button";

describe("Button Component", () => {
    it("renders with text", () => {
        render(<Button>Click me</Button>);
        expect(
            screen.getByRole("button", { name: /click me/i }),
        ).toBeInTheDocument();
    });

    it("calls onClick handler when clicked", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();

        render(<Button onClick={handleClick}>Click me</Button>);

        await user.click(screen.getByRole("button"));
        expect(handleClick).toHaveBeenCalledOnce();
    });

    it("renders with different variants", () => {
        const { rerender } = render(<Button variant="primary">Primary</Button>);
        expect(screen.getByRole("button")).toHaveClass("bg-blue-600");

        rerender(<Button variant="outline">Outline</Button>);
        expect(screen.getByRole("button")).toHaveClass("border-2");
    });

    it("renders with different sizes", () => {
        const { rerender } = render(<Button size="sm">Small</Button>);
        expect(screen.getByRole("button")).toHaveClass("text-sm");

        rerender(<Button size="lg">Large</Button>);
        expect(screen.getByRole("button")).toHaveClass("text-lg");
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button disabled>Disabled</Button>);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("forwardRef works correctly", () => {
        const ref = React.createRef<HTMLButtonElement>();
        render(<Button ref={ref}>Ref Test</Button>);
        expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    });
});
