import { makeHeading } from "./makeHeading";

describe("Make heading test", () => {
  it("should create a heading h1", () => {
    const actualResult = makeHeading("Hello", 1);
    const expectedResult = "<h1>Hello</h1>";
    expect(actualResult).toBe(expectedResult);
  });
  it("should create a heading h2", () => {
    const actualResult = makeHeading("Next level", 2);
    const expectedResult = "<h2>Next level</h2>";
    expect(actualResult).toBe(expectedResult);
  });
});
