export default function scrunch(this: number[]) {
  const start = this.length % 2 === 0 ? this.length - 1 : this.length - 2;
  for (let i = start; i >= 0; i -= 2) {
    this[i - 1] = this[i - 1] + this[i];
    this.splice(i, 1);
  }
  return this;
}
