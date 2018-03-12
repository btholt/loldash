import install from "../index";

install();

describe("fry", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.fry).toBeDefined();
  });

  test("works on an array", () => {
    expect([1, 2, 3, 4, 5].fry()).toEqual([326, 327, 328, 329, 330]);
    expect([100].fry()).toEqual([425]);
  });
});
