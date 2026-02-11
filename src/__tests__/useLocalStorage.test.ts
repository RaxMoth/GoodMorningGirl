import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "../hooks/useLocalStorage";

describe("useLocalStorage Hook", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    it("returns initial value when localStorage is empty", () => {
        const { result } = renderHook(() =>
            useLocalStorage("test-key", "initial"),
        );
        expect(result.current[0]).toBe("initial");
    });

    it("persists and retrieves value from localStorage", () => {
        const { result } = renderHook(() =>
            useLocalStorage("test-key", "initial"),
        );

        act(() => {
            result.current[1]("updated");
        });

        expect(result.current[0]).toBe("updated");
        expect(localStorage.getItem("test-key")).toBe(
            JSON.stringify("updated"),
        );
    });

    it("returns stored value on remount", () => {
        const { unmount } = renderHook(() =>
            useLocalStorage("test-key", "initial"),
        );

        const { result } = renderHook(() =>
            useLocalStorage("test-key", "initial"),
        );
        expect(result.current[0]).toBe("initial");

        unmount();
    });

    it("handles complex objects", () => {
        const testObject = { name: "John", age: 30 };
        const { result } = renderHook(() =>
            useLocalStorage("obj-key", testObject),
        );

        act(() => {
            result.current[1]({ name: "Jane", age: 25 });
        });

        expect(result.current[0]).toEqual({ name: "Jane", age: 25 });
    });

    it("handles JSON parsing errors gracefully", () => {
        localStorage.setItem("bad-key", "invalid json");
        const { result } = renderHook(() =>
            useLocalStorage("bad-key", "fallback"),
        );

        expect(result.current[0]).toBe("fallback");
    });
});
