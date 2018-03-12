export default function mushyface(this: number[]) {
  const order = Array.from({ length: this.length }, (_, i) => i).squiggle();
  const fuzzDistance = Math.max(
    1,
    Math.round(this.reduce((acc, item) => acc + item) / this.length)
  );

  for (let i = 0; i < this.length; i++) {
    const fuzzAmount =
      Math.round(Math.random() * fuzzDistance) * (Math.random() > 0.5 ? 1 : -1);

    this[i] += fuzzAmount;
    this[order[i]] -= fuzzAmount;
  }
  return this;
}
