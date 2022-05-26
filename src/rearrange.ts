export default (n: number | string): number | string => {
  const res = (typeof n === "number" ? n.toString() : n).split("").sort(() =>
    Math.random() > 0.5 ? 1 : -1
  ).join("");
  return typeof n === "number" ? Number(res) : res;
};
