USE sakila;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

SELECT C.customer_id, C.first_name, A.actor_id
FROM sakila.customer AS C
RIGHT JOIN sakila.actor AS A
ON C.last_name = A.last_name;

SELECT
   CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM employees AS Employee
INNER JOIN employees AS Manager
ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;