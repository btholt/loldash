import install from "../index";

install();

describe("ginormous", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.ginormous).toBeDefined();
  });

  test("works on an array", () => {
    const array = [5, 12, 7, 9];
    const previous = array.length;
    array.ginormous();

    expect(array.length).toBe(2 ** previous);
  });
});
