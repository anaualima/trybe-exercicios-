// criptomoedas
const API_URL = 'api.coincap.io/v2/assets';

function getCoins() {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data));
}

getCoins()

window.onload = () => getCoins();