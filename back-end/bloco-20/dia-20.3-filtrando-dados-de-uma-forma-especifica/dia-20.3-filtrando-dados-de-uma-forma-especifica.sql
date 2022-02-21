-- Exercício Conteúdo 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- Exercício Conteúdo 2
SELECT * FROM sakila.customer
WHERE active = 0
AND store_id = 2
AND first_name <> 'KENNETH';
-- Exercício Conteúdo 3
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG'
OR rating = 'PG-13'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC
LIMIT 100;
-- Exercício Conteúdo 4
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM sakila.customer
WHERE active = 1 AND store_id = 1;
-- Exercício Conteúdo 5
SELECT * FROM sakila.customer
WHERE store_id = 1;
-- Exercício Conteúdo 6
USE sakila;
SELECT title FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;