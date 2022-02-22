-- Exercício DELETE & TRUCATE
-- Exercício 1
SET SQL_SAFE_UPDATES = 0;
SELECT * FROM sakila.actor;
-- Ids relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';
-- Apagando referẽncias
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
-- Deletando 
DELETE FROM sakila.actor
WHERE first_name = 'KARL';
SELECT * FROM sakila.actor;
-- Exercicio 2
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';
-- Exercício 3
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';
-- Exercício 4
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
-- Exercício 5
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
-- Exercício 6
-- Apagar a tabela