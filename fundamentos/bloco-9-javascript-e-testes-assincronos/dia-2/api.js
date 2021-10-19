// criptomoedas
const API_URL = 'https://api.coincap.io/v2/assets';
console.log(API_URL);

function getCoins() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

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