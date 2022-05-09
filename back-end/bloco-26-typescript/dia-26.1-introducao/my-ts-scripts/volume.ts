const un = ["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"];

function con(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = un.indexOf(fromUnit);
  const toIndex = un.indexOf(toUnit);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(1000, exponent);
}