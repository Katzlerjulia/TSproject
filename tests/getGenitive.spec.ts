import { getGenitive } from "./getGenitive";

describe("Change to genetive test", () => {
  it("should add s in the end", () => {
    const actualResult = getGenitive("Julia");
    const expectedResult = "Julias";
    expect(actualResult).toBe(expectedResult);
  });
  it("should return name as it is", () => {
    const actualResult = getGenitive("Hampus");
    const expectedResult = "Hampus";
    expect(actualResult).toBe(expectedResult);
  });
});
