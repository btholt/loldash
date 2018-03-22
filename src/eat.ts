export default function eat(this: any[]) {
  this.splice(0, this.length);
  return this;
}
