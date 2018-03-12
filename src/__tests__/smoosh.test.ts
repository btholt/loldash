import install from "../index";

install();

describe("smoosh", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.smoosh).toBeDefined();
  });

  test("works on an array", () => {
    const x = [[1, 2, 3, 4], 5, [6, 7, 8], 9];

    expect(x.smoosh()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
