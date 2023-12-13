import { getGroups } from "./getGropus";

import { response } from "./getGroupsResponse";

describe("get group test", () => {
  it("should return an array with three groups", async () => {
    const actualResult = await getGroups();
    const expectedResult = response;
    expect(actualResult).toStrictEqual(expectedResult);
  });
});
