// githubApi.test.js

const fetch = require('node-fetch');
const url = 'https://api.github.com/orgs/tryber/repos';

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.map((repo) => repo.name)))
);

getRepos(url);
// implemente seus testes aqui