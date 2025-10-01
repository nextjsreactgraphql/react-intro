import { expect, test } from "vitest";

function add(a: number, b: number) {
  return a+b;
}

test("hello testing", () => {
  expect(add(1, 3)).toBe(4);
})