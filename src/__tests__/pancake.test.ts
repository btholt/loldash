import install from "../index";

install();

describe("pancake", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.pancake).toBeDefined();
  });

  test("works on an array", () => {
    const x = [1, 2, 3, [13, 19], 4, 10, 36, 9];

    expect(x.pancake()).toEqual(x.smoosh().fry());
  });
});
