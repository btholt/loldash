import install from "../index";

install();

describe("nop", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.nop).toBeDefined();
  });

  test("works on an array", () => {
    const array = [5, 12, 7, 9, 12, 35, "thing", "not important"];

    expect(array.nop()).toEqual(array);
  });
});
