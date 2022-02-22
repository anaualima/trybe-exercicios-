-- exercicio 20.4 Manipulando Tabelas INSERT
-- exercício 1
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Geralt', 'of Rivia', 2, 'tossacoin@gmail.com', 1, 1, 'geralt', 'theWhiteWolf');
-- exercicio 2
INSERT INTO `sakila`.`staff`
    (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
    ('Lumena', 'BBB', 2, 'fenotipo@gmail.com', 1, 1, 'problemaizar', 'fetotipicamente'),
    ('Bruna', 'BBB', 2, 'barbie@gmail.com', 1, 1, 'afropaty', 'amolud'),
    ('Gil', 'BBB', 2, 'gildovigor@gmail.com', 1, 1, 'tchaca', 'tchacaca');
-- Exercicio 3
INSERT INTO sakila.actor(first_name, last_name)
SELECT fisrt_name, last_name
FROM sakila.customer
ORDER BY customer_id
LIMIT 5;
-- Exercício 4
INSERT INTO sakila.category (name)
VALUES ('NETFLIX'),
       ('PREGUIÇA'),
       ('LOVEMASSA');
-- Exercício 5
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES 
   (1, 2);
SELECT * FROM sakila.store;
