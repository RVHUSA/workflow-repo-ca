import { expect, describe, it } from "vitest";
import { isActivePath } from "./isActivePath.js";

describe("isActivePath", () => {
  // Test 1: Check that the function returns true when the current path exactly matches the href
  it("returns true when current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  // Test 2: Check that the function correctly identifies the root path as active
  it('returns true for root path ("/") when path is "/" or "/index.html"', () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/index.html", "/")).toBe(true);
  });

  // Test 3: Check that the function detects when the current path includes the href
  it("returns true when current path includes the href", () => {
    expect(isActivePath("/blog/post-1", "/blog")).toBe(true);
  });

  // Test 4: Check that the function returns false for non-matching paths
  it("returns false when paths do not match", () => {
    expect(isActivePath("/contact", "/about")).toBe(false);
  });
});
