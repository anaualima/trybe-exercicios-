const imc = (height, weight) => {
 return ( (weight/ Math.pow( height, 2)).toFixed(1))
};

module.exports = imc;