"use strict";
const unit = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];
function conver(value, fromUnit, toUnit) {
    const fromIndex = unit.indexOf(fromUnit);
    const toIndex = unit.indexOf(toUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
