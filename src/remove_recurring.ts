// Works with strings too. I am not a sadist.

export default (n: number | string): number | string => {
  const res = removeDuplicates(
    (typeof n === "number" ? n.toString() : n).split(""),
  ).join("");
  return typeof n === "number" ? Number(res) : res;
};

function removeDuplicates(arr: string[]) {
  return arr.filter((x, i) => arr.indexOf(x) === i);
}
