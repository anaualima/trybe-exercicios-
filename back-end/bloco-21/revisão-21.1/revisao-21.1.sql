-- Revisão 21.1
-- exercicio 1
SELECT MAX(salary) FROM hr.employees;
-- exercicio 2
SELECT MAX(salary) - MIN(salary) FROM hr.employees;
-- exercicio 3
SELECT  job_id, AVG(salary) AS 'average_salary'
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;
-- exercicio 4
SELECT SUM(salary) FROM hr.employees;
-- exercicio 5
SELECT MIN(salary) AS 'menor_salario', MAX(salary) AS 'maior_salario', SUM(salary) AS 'soma_salarios', ROUND(AVG(SALARY), 2) AS 'media_salarios'
FROM hr.employees;
-- exercicio 6
SELECT COUNT(*) FROM hr.employees
WHERE job_id = 'it_prog';
-- exercicio 7
SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id;
-- exercicio 8
SELECT job_id, SUM(salary) FROM hr.employees
GROUP BY job_id
HAVING job_id = 'it_prog';
-- exercicio 9
SELECT job_id, ROUND(AVG(salary), 2) AS 'media_salarial' FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media_salarial DESC;
-- exercicio 10
SELECT * FROM hr.employees;
SELECT AVG(salary) AS 'media_salarial',COUNT(*) AS'numero_funcionarios'
FROM hr.employees
GROUP BY department_id
HAVING numero_funcionarios > 10;
-- exercicio 11
SELECT REPLACE(phone_number,'515', '777') FROM hr.employees;
-- exercicio 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;
-- exercicio 13
SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;
-- exercicio 14
SELECT employee_id, first_name, DAY(hire_date) FROM hr.employees;
-- exercicio 15
SELECT employee_id, first_name, MONTH(hire_date) FROM hr.employees;
-- exercicio 16
SELECT UCASE(first_name), UCASE(last_name) FROM hr.employees;
-- exercicio 17
SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = '7' AND YEAR(hire_date) = '1987';
-- exercicio 18
SELECT first_name, last_name,  DATEDIFF(CURRENT_DATE() , HIRE_DATE) AS 'dias_trabalhados' FROM hr.employees;
