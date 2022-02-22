-- TIPOS DE DATA
-- Exercicio 1
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = 2005-05-25;
-- Exercicio 2
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN 2005-06-01 AND 2005-08-22;
-- Exercício 3
SELECT rental_date FROM sakila.rental
WHERE rental_id = 10330;
-- Exercicio 4
USE sakila;
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;