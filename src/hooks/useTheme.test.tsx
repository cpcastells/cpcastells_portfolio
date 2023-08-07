import { renderHook, act } from "@testing-library/react";
import useTheme from "./useTheme";

describe("Given a useTheme custom hook", () => {
  let originalMatchMedia: typeof window.matchMedia;

  beforeAll(() => {
    originalMatchMedia = window.matchMedia;

    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: query === "(prefer-color-scheme: dark)",
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      };
    });
  });

  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });

  describe("when it is called", () => {
    test("should initialize with light theme", () => {
      act(() => {
        window.localStorage.clear();
        window.matchMedia = jest.fn().mockReturnValue({
          matches: false,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        });
      });

      const { result } = renderHook(() => useTheme());

      expect(result.current[0]).toBe("light");
    });
  });

  describe("When toggle theme based on media query", () => {
    test("It should toggle theme to dark when media query matches", () => {
      act(() => {
        window.localStorage.clear();
        window.matchMedia = jest.fn().mockReturnValue({
          matches: true,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        });
      });

      const { result } = renderHook(() => useTheme());

      expect(result.current[0]).toBe("dark");
    });

    test("It should toggle theme to light when media query doesn't match", () => {
      act(() => {
        window.localStorage.clear();
        window.matchMedia = jest.fn().mockReturnValue({
          matches: false,
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
        });
      });

      const { result } = renderHook(() => useTheme());

      expect(result.current[0]).toBe("light");
    });
  });

  describe("When dark mode is set", () => {
    test("It should set and retrieve theme from localStorage", () => {
      const { result } = renderHook(() => useTheme());

      act(() => {
        result.current[1]("dark");
      });

      const { result: secondResult } = renderHook(() => useTheme());
      const mode = window.localStorage.getItem("theme");

      expect(secondResult.current[0]).toBe("dark");
      expect(mode).toBe("dark");
    });
  });
});
