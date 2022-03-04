USE albuns;

CREATE TABLE albuns(
albun_id INT PRIMARY KEY AUTO_INCREMENT,
artista_id INT NOT NULL,
titulo VARCHAR(100) NOT NULL,
preco DECIMAL(5,2) NOT NULL,
estilo_id INT NOT NULL,
FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id)
) ENGINE=InnoDB;

CREATE TABLE estilo_musical(
estilo_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;