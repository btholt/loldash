export default function squirt(this: any[]) {
  if (!Array.__privateLastAccessedArray__) {
    throw new Error("lol I don't see any other arrays");
  }
  const previousArray = Array.__privateLastAccessedArray__;
  const { length } = this;
  const toMove = this.splice(Math.floor(Math.random() * length), 1);
  if (toMove.length) {
    previousArray.splice(
      Math.floor(Math.random() * previousArray.length),
      0,
      toMove[0]
    );
  }
  Array.__privateLastAccessedArray__ = this;
  return this;
}
