import install from "../index";

install();

describe("scrunch", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.scrunch).toBeDefined();
  });

  test("works on an even array", () => {
    const x = [5, 12, 7, 9];
    const y = [17, 16];

    expect(x.scrunch()).toEqual(y);
  });

  test("works on an odd array", () => {
    const x = [1, 2, 3, 4, 10, 36, 9];
    const y = [3, 7, 46, 9];

    expect(x.scrunch()).toEqual(y);
  });
});
