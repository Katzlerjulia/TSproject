import { getUsers } from "./getUsers";
import { response } from "./getUsersResponse";

describe("get users test", () => {
  it("should return an array with 6 people when getting data", async () => {
    const actualResult = await getUsers();
    const expectedResult = response;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
