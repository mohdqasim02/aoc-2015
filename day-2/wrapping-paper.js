const fs = require("fs");

const toNumber = (digits) => +digits;
const parseDimensions = (rawDimensions) => {
  return rawDimensions.split("\n")
    .map(dimension => dimension.split("x")
      .map(toNumber).sort((a, b) => a - b));
};

const sum = (a, b) => a + b;
const area = (l, b) => l * b;
const volume = (l, b, h) => l * b * h;
const perimeter = (l, b) => 2 * sum(l, b);
const surfaceArea = ([l, b, h]) => 2 * (area(l, b) + area(b, h) + area(h, l));

const totalSurfaceArea = (dimensions) => {
  return dimensions.map(dimension => {
    return surfaceArea(dimension) + area(...dimension);
  }).reduce(sum);
};

const totalRibbonLength = (dimensions) => {
  return dimensions.map(dimension => {
    return volume(...dimension) + perimeter(...dimension);
  }).reduce(sum);
};

const main = () => {
  const rawDimensions = fs.readFileSync("day-2/input.txt", "utf-8");
  const dimensions = parseDimensions(rawDimensions);

  // PART-1
  console.log("Total Surface Area: ", totalSurfaceArea(dimensions));

  // PART-2
  console.log("Total Ribbon Length: ", totalRibbonLength(dimensions));
}

main();