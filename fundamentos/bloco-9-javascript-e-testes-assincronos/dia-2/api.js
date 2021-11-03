// criptomoedas
const API_URL = 'https://api.coincap.io/v2/assets';
console.log(API_URL);

async function nome() {
  const {data} = await getCoins();
  const coins = document.getElementById('criptomoedas')
  data.filter((_, i) => i<10).forEach((coin) => {
    const li = document.createElement('li');
    li.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`
    coins.appendChild(li)
  });
}

nome();