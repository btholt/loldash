export default function smooosh(this: any[]) {
  return this.reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? item.smooosh() : item),
    []
  );
}
