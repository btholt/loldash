import install from "../index";

install();

describe("squirt", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.squirt).toBeDefined();
  });

  test("squirts into the previously accessed array", () => {
    const x = [];
    const y = [1];

    x.concat([]);
    y.squirt();

    expect(x).toEqual([1]);
    expect(y).toEqual([]);
  });
});
