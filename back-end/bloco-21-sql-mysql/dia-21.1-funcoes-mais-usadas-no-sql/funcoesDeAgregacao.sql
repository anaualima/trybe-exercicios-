-- Funções de Agregação
-- Exercício 1
SELECT AVG(length) AS 'Média de Duração' FROM sakila.film;
-- Exercício 2
SELECT  MIN(length) AS 'Duração Mínima' FROM sakila.film;
-- Exercício 3
SELECT MAX(length) AS 'Duração Máxima' FROM sakila.film;
-- Exercício 4
SELECT SUM(length) AS 'Tempo de Exibição Total' FROM sakila.film;
-- Exercício 5
SELECT COUNT(*) AS 'Filmes Registrados' FROM sakila.film;