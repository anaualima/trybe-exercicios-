-- Continuação de exercicio de conteúdo
-- exercicio 1
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
-- exercicio 2
SELECT * FROM sakila.film
WHERE description LIKE '%china';
-- exercicio 3
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';
-- exercicio 4
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
-- exercicio 5
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%documentary%';
-- exercicio 6
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';
-- exercicio 7
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';