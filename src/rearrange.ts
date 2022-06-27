/**
 * Rearrange digits in a number or characters in a string randomly.
 * @param {number|string} n - Number / String to rearrange. 
 * @returns {number|string}
 */
export function Rearrange(n: number | string): number | string {
  const res = (typeof n === "number" ? n.toString() : n).split("").sort(() =>
    Math.random() > 0.5 ? 1 : -1
  ).join("");
  return typeof n === "number" ? Number(res) : res;
}
export default Rearrange;
