import install from "../index";

install();

describe("floppy", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.floppy).toBeDefined();
  });

  test("works on an array larger than length 3", () => {
    const array = [5, 12, 7, 9, 15, 19];
    const flopped = array.floppy();

    expect(array).toEqual([5, 12, 7]);
    expect(flopped).toEqual([9, 15, 19]);
  });

  test("works on an array smaller than length 3", () => {
    const array = [5, 12];
    const flopped = array.floppy();

    expect(array).toEqual([]);
    expect(flopped).toEqual([5, 12]);
  });
});
