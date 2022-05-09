"use strict";
const uni = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];
function conv(value, fromUnit, toUnit) {
    const fromIndex = uni.indexOf(fromUnit);
    const toIndex = uni.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
