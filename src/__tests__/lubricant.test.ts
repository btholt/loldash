import install from "../index";

install();

describe("lubricant", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.lubricant).toBeDefined();
  });

  test("works on an array", () => {
    const x = [1, 2, 3];
    x.lubricant(5);
    expect(x).toEqual([1, 2, 3, void 0, void 0]);
  });
});
