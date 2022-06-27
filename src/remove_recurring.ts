// Works with strings too. I am not a sadist.

/**
 * Remove recurring digits in a number / characters in a string.
 * @param {number|string} n - Number / String to rearrange. 
 * @returns {number|string}
 */

export function RemoveRecurring(n: number | string): number | string {
  const res = removeDuplicates(
    (typeof n === "number" ? n.toString() : n).split(""),
  ).join("");
  return typeof n === "number" ? Number(res) : res;
};

/**
 * Remove duplicate values in an array.
 * @param {string[]} arr - Array of strings. 
 * @returns {string[]}
 */
function removeDuplicates(arr: string[]): string[] {
  return arr.filter((x, i) => arr.indexOf(x) === i);
}

export default RemoveRecurring;