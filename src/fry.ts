declare global {
  interface Array<T> {
    fry(): T[];
  }
}

export default function fry(this: number[]) {
  for (let i = 0; i < this.length; i++) {
    this[i] = +this[i] + 325;
  }
  Array.__privateLastAccessedArray__ = this;
  return this;
}
