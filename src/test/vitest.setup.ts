import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll } from "vitest";

afterEach(() => {
  cleanup();
});
beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    root: Element | null = null;
    rootMargin: string = "";
    thresholds: ReadonlyArray<number> = [];

    constructor(
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit,
    ) {
      // You can store the callback and options if needed
    }

    observe() {
      // Mock implementation for observe
    }

    unobserve() {
      // Mock implementation for unobserve
    }

    disconnect() {
      // Mock implementation for disconnect
    }

    takeRecords() {
      return []; // Mock implementation for takeRecords
    }
  };
});
