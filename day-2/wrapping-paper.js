const fs = require("fs");

const toNumber = (digits) => +digits;

const parseDimensions = (rawDimensions) => {
  return rawDimensions.split("\n")
    .map(dimension => dimension.split("x").map(toNumber).sort((a, b) => a - b));
};

const sum = (a, b) => a + b;
const area = (l, b) => l * b;
const volume = (l, b, h) => l * b * h;
const perimeter = (l, b) => 2 * sum(l, b);
const surfaceArea = (l, b, h) => 2 * (area(l, b) + area(b, h) + area(h, l));

const totalSurfaceArea = (dimensions) => {
  return dimensions.map(([l, b, h]) => {
    return surfaceArea(l, b, h) + area(l, b);
  }).reduce(sum);
};

const totalRibbonLength = (dimensions) => {
  return dimensions.map(([l, b, h]) => {
    return volume(l, b, h) + perimeter(l, b);
  }).reduce(sum);
};

const main = () => {
  const rawDimensions = fs.readFileSync("./input.txt", "utf-8");
  const dimensions = parseDimensions(rawDimensions);

  // PART-1
  console.log("Total Surface Area: ", totalSurfaceArea(dimensions));

  // PART-2
  console.log("Total Ribbon Length: ", totalRibbonLength(dimensions));
};

main();