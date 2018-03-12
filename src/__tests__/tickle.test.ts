import install from "../index";

install();

describe("tickle", () => {
  test("installs on the array prototype", () => {
    expect(Array.prototype.tickle).toBeDefined();
  });

  test("tickles", () => {
    const array = [
      5,
      12,
      "10",
      "1",
      { thing: 5 },
      ["zero", "one"],
      null,
      void 0,
      true,
      false
    ];

    expect(array.tickle()).toEqual([
      "5",
      "12",
      10,
      1,
      [["thing", 5]],
      { 0: "zero", 1: "one" },
      void 0,
      null,
      false,
      true
    ]);
  });
});
