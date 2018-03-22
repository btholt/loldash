import install from "../index";

install();

describe("eat", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.eat).toBeDefined();
  });

  test("works on an array", () => {
    expect([1, 2, 3, 4, 5].eat()).toEqual([]);
  });

  test("works on an empty array", () => {
    expect([].eat()).toEqual([]);
  });
});
