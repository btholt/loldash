export default function moist(this: any[]) {
  return `
function generateArray() {
  return ${JSON.stringify(this, null, 0)}
}
  `;
}
