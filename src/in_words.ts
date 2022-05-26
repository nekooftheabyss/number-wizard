const digits = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const teens = [
  "",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "",
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const tenPowers = {
  int: [
    "{ones}",
    "{tens}",
    "{ones} hundred",
    "{ones} thousand",
    "{tens}",
    "{ones} hundred",
    "{ones} million",
    "{tens}",
    "{ones} hundred",
    "{ones} billion",
    "{tens}",
    "{ones} hundred",
    "{ones} trillion",
  ],
  in: [
    "{ones}",
    "{tens}",
    "{ones} hundred",
    "{ones} thousand",
    "{tens}",
    "{ones} lakh",
    "{tens}",
    "{ones} crore",
    "{tens}",
    "{ones} hundred",
    "{ones} thousand",
  ],
};

function getTenPower(i: number, indian = false) {
  const arr = indian ? tenPowers.in : tenPowers.int;
  i = i % arr.length;
  return arr[i];
}

export default (n: number, indian = false): string => {
  if (n === 0) return "zero";
  const digitNumbers: number[] = n.toString().split("").map((x) => Number(x))
    .reverse();
  const digitStrings: string[] = [];
  for (let i = 0; i < digitNumbers.length; ++i) {
    if (getTenPower(i + 1, indian)?.startsWith("{tens}")) {
      if (digitNumbers[i + 1] === 1) {
        digitStrings.push(
          `${teens[digitNumbers[i]]} ${
            getTenPower(i, indian).replace(/\{ones\}\s?/, "")
          }`,
        );
        if (i !== digitNumbers.length - 2) digitStrings.push("and");

        ++i;
        continue;
      }

      /*      if (digitNumbers[i] !== 0) {
        digitStrings.push(
          getTenPower(i + 1, indian).replace(
            "{tens}",
            `${tens[digitNumbers[i + 1]]} ${digits[digitNumbers[i]]}`,
          ),
        );
        ++i;
        continue;
      }*/
    }
    digitStrings.push(
      getTenPower(i, indian).replace(
        "{ones}",
        digits[digitNumbers[i]],
      ).replace("{tens}", tens[digitNumbers[i]]),
    );
    if ((i - 1) % 3 === 0 && !indian) digitStrings.push("and");
  }
  return digitStrings.reverse().join(" ");
};
