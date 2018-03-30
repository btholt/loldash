import install from "../index";

install();

describe("nope", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.nope).toBeDefined();
  });

  test("works on an array", () => {
    const array = [5, 12, 7, 9, 12, 35, "thing", "not important"];

    expect(array.nope()).toEqual(array);
  });
});
