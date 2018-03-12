import install from "../index";

install();

describe("squiggle", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.squiggle).toBeDefined();
  });

  test("works on an array", () => {
    const array = [5, 12, 7, 9];
    const copy = [5, 12, 7, 9];

    array.squiggle();

    expect(array.length).toEqual(copy.length);

    const leftOver = array.filter(item => !copy.includes(item));

    expect(leftOver.length).toBe(0);
  });
});
