-- Revisão 
-- Dia 20.3
USE PecasFornecedores;
-- Escreva uma query para exibir todas as peças que começam com GR .
SELECT * FROM PecasFornecedores.Pecas
WHERE `name` LIKE 'GR%';
-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .
SELECT peca, preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE `code` LIKE '%N%';
-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
SELECT * FROM Fornecedores
WHERE `name` LIKE '%LTDA'
ORDER BY `name`;
-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT * FROM Fornecedores
WHERE `code` LIKE '%N%';
-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
SELECT * FROM Fornecimentos
WHERE preco BETWEEN 15.1 AND 40
ORDER BY preco DESC;
-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019
SELECT COUNT(*) FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
