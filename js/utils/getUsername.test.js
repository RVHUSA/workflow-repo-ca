import { expect, describe, it, beforeEach } from "vitest";
import { getUsername } from "./storage.js";

const userKey = "user";

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  // Test 1: Check that the function returns the user's name if a user exists in storage
  it("returns the name when a user exists in storage", () => {
    const user = { name: "Emma" };
    localStorage.setItem(userKey, JSON.stringify(user));

    const result = getUsername();
    expect(result).toBe("Emma"); //
  });

  // Test 2: Check that the function returns null if storage is empty
  it("returns null when no user exists in storage", () => {
    const result = getUsername();
    expect(result).toBeNull();
  });
});
