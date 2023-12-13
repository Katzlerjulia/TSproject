import { validateZip } from "./validateZip";

describe("validate zip test", () => {
  it("should return true when zip is correctly written", () => {
    const actualResult = validateZip("12345");
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });
  it("should return false when zip is incorrectly written, to few numbers", () => {
    const actualResult = validateZip("123");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  it("should return false when zip is incorrectly written, to many numbers", () => {
    const actualResult = validateZip("12345678");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  it("should return false when zip is incorrectly written, not only numbers", () => {
    const actualResult = validateZip("12abc");
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});
