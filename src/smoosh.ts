export default function smoosh(this: any[]) {
  return this.reduce((acc, item) => acc.concat(item), []);
}
