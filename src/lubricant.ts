export default function lubricant(this: any[], length: number) {
  if (length < this.length) {
    throw new Error(
      "lubricant can only be used to expand an array. otherwise it'd be drying it up"
    );
  }

  const previousLength = this.length;

  for (let i = 0; i < length - previousLength; i++) {
    this.push(void 0);
  }
  Array.__privateLastAccessedArray__ = this;
  return this;
}
