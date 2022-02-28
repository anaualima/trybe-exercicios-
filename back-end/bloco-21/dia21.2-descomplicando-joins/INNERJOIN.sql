SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;
-- Exercício 21.2 INNER JOIN
-- exercicio 1
SELECT act.actor_id, act.first_name, act.last_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil
ON act.actor_id = fil.actor_id;
-- exercicio 2
SELECT st.first_name, st.last_name, ad.address
FROM sakila.staff AS st
INNER JOIN sakila.address AS ad
ON st.address_id = ad.address_id;
-- exercicio 3
SELECT C.customer_id, C.first_name, C.last_name, C.email, C.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY first_name
LIMIT 100;
-- exercício 4
SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California'
AND C.first_name LIKE '%rene%';
-- exercício 5
SELECT * FROM sakila.customer;
SELECT C.first_name, COUNT(A.address) AS `quantidade de endereço`
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE C.active = 1
GROUP BY C.customer_id
ORDER BY first_name DESC;
-- exercício 6 !!! ESTÁ INCOMPLETA !!!
SELECT S.first_name, S.last_name, P.amount
FROM sakila.staff AS S
INNER JOIN sakila.payment AS P
ON S.staff_id = P.staff_id
WHERE YEAR(P.payment_date) = 2006
GROUP BY S.first_name, S.last_name;
-- Exercício 7
SELECT * FROM sakila.actor;
SELECT A.actor_id, A.first_name, FA.film_id, F.title
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA
ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F
ON FA.film_id = F.film_id;

