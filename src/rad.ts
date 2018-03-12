const hearts = ["❤", "🧡", "💛", "💚", "💙", "💜"];

export default function rad(this: any[]): string[] {
  for (let i = 0; i < this.length; i++) {
    this[i] = hearts[i % hearts.length];
  }
  return this;
}
