// githubApi.test.js

const { TestWatcher } = require('@jest/core');
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe('quando chamada, retorna a funcao getRepos', () => {
  test('retorna todos os repositorios em um unico array', async () => {
    expect.assertions(1);

    const repos = await getRepos(url);
    const result = [
      'sd-01-week3-html-css-project',
      'sd-01-week4-5-project-meme-generator',
      'sd-01-week4-5-project-mystery-letter',
      'sd-01-week4-5-project-pixels-art',
      'sd-01-week4-5-project-talk-pirate',
      'sd-01-week4-5-project-color-guess',
      'sd-01-week4-5-project-todo-list',
      'sd-01-week6-project-facebook-signup',
      'sd-01-week7-project-daily-prophet',
      'sd-02-week2-project-shell-script',
      'sd-01-week8-project-zoo-functions',
      'sd-01-week9-project-shopping-cart',
      'sd-01-week10-movie-card-library',
      'sd-01-week11-movie-card-library-stateful',
      'sd-02-week5-project-meme-generator',
      'sd-02-week5-project-pixels-art',
      'sd-02-week5-project-color-guess',
      'sd-02-week5-project-todo-list',
      'sd-02-week5-project-mystery-letter',
      'sd-02-week6-project-facebook-signup',
      'sd-02-week7-project-daily-prophet',
      'sd-02-week8-project-zoo-functions',
      'sd-02-week9-project-shopping-cart',
      'sd-02-week11-movie-card-library',
      'sd-02-week12-movie-card-library-stateful',
      'sd-01-week12-movie-card-library-crud',
      'sd-01-week13-project-frontend-online-store',
      'sd-01-week13-project-frontend-online-store-group-2',
      'linter-template',
      'sd-01-week14-js-unit-tests'
    ];
    expect(repos).toEqual(result);
  });
});