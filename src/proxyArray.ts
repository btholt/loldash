const methods = [
  "concat",
  "copyWithin",
  "entries",
  "every",
  "fill",
  "filter",
  "find",
  "findIndex",
  "flatMap",
  "flatten",
  "forEach",
  "includes",
  "indexOf",
  "join",
  "keys",
  "lastIndexOf",
  "map",
  "pop",
  "push",
  "reduce",
  "reduceRight",
  "reverse",
  "shift",
  "some",
  "sort",
  "splice",
  "unshift",
  "values"
];

export default function installFakeMethods() {
  methods.forEach(prop => {
    Object.defineProperty(Array.prototype, `_${prop}`, {
      enumerable: false,
      value: Array.prototype[prop]
    });

    delete Array.prototype[prop];
    Object.defineProperty(Array.prototype, prop, {
      enumerable: true,
      value(this: any[], ...input) {
        Array.__privateLastAccessedArray__ = this;
        return this[`_${prop}`](...input);
      }
    });
  });
}
