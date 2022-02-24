-- Revisão 
-- Dia 20.2
USE Scientists;
-- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT `name` FROM Scientists.Projects
ORDER BY Hours LIMIT 1 OFFSET 1;
-- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Scientists.Projects
ORDER BY hours DESC LIMIT 5;
-- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.') AS concatenação FROM Scientists;
-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as resultado FROM Scientists.Projects;