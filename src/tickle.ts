export default function tickle(
  this: Array<number | string | any[] | object | null | undefined | boolean>
) {
  for (let i = 0; i < this.length; i++) {
    const current = this[i];
    if (typeof current === "number") {
      this[i] = current.toString();
    } else if (typeof current === "string") {
      this[i] = +current;
    } else if (typeof current === "boolean") {
      this[i] = !current;
    } else if (current === null) {
      this[i] = void 0;
    } else if (Array.isArray(current)) {
      this[i] = current.reduce((acc, item, index) => {
        acc[index] = item;
        return acc;
      }, {});
    } else if (typeof current === "object") {
      this[i] = Object.keys(current).map(key => [key, current[key]]);
    } else {
      this[i] = null;
    }
  }
  return this;
}
