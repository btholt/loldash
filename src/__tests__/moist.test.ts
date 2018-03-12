/* tslint:disable no-eval */
import install from "../index";

install();

describe("moist", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.moist).toBeDefined();
  });

  test("works on an array", () => {
    const x = [1, 2, 3, 4, 10, 36, 9];

    expect(eval(`(${x.moist()})()`)).toEqual(x);
  });
});
