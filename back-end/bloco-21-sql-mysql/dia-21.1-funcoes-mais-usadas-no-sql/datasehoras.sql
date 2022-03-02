-- Datas
-- Anotações
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS
SELECT YEAR(CURRENT_DATE()); -- retorna o ano atual
SELECT HOUR(NOW()); -- retorna a hora atual
-- Exercício 1
SELECT DATEDIFF('2030-01-20', '2022-02-23');
-- Exercício 2
SELECT TIMEDIFF('10:25:45', '11:00:00');