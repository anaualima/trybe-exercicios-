-- Revisão 21.2 JOINs
-- exercício 1
SELECT M.title, B.domestic_sales, B.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id;
-- exercício 2
SELECT M.title, (B.domestic_sales + B.international_sales) AS 'vendas'
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE international_sales > domestic_sales;
-- exercicio 3
SELECT M.title, B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice As B
ON M.id = B.movie_id
ORDER BY B.rating DESC;
-- exercicio 4
SELECT T.*, M.*
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY T.`name`;
-- exercicio 5
SELECT T.*, M.*
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id
ORDER BY M.title;
