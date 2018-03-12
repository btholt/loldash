import install from "../index";

install();

describe("mushyface", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.mushyface).toBeDefined();
  });

  test("mushes faces", () => {
    const array = [1, 9, 13, 21, 3, 8, 2];
    const total = array.reduce((acc, cur) => acc + cur);
    const previousLength = array.length;
    array.mushyface();
    const newTotal = array.reduce((acc, cur) => acc + cur);

    expect(total).toEqual(newTotal);
    expect(array.length).toEqual(previousLength);
  });
});
