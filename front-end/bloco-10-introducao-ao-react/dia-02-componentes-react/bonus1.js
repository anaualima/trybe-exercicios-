const urlDollar = 'https://api.coincap.io/v2/assets';
const urlCurrency = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest//currencies/usd.min.json';

const getCurrency = () => {
return fetch(urlCurrency)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

const getDollar = () => {
return fetch(urlDollar)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

async function moneyCurrency() {
  const {data} = await getCurrency();
  console.log(data);
}

moneyCurrency();

