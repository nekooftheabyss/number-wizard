// Add commas to a number

/**
 * @param {number} x - Number to add commas in.
 * @param {string} type - Specify "in" for Indian system. Leave blank for the general one.
 */
export default (x: number, type?: string): string => {
  if(!type) type = "x"
  switch (type.toLowerCase()) {
    case "in": {
      const y = x ? x.toString().split(".") : [""];
      const thousand = (Number(y[0]) % 1000).toString();
      y[0] = Math.trunc(Number(y[0]) / 1000).toString()
      .replace(/\B(?=(\d{2})+(?!\d))/g, ",");
      y[0] = `${y[0]},${thousand}`
      return y.join(".");
    }
    default: {
      const y = x ? x.toString().split(".") : [""];
      y[0] = y[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return y.join(".");
    }
  }
};
