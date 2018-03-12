export default function floppy(this: any[]) {
  return this.splice(this.length > 3 ? this.length - 3 : 0, 3);
}
