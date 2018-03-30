import install from "../index";

install();

describe("smooosh", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.smooosh).toBeDefined();
  });

  test("works on an array", () => {
    const x = [[1, [2, [3]], 4], 5, [[6, 7], 8], [[[9]]]];

    expect(x.smooosh()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
