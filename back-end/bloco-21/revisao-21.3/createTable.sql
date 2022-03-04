USE normalization;

CREATE TABLE Funcionarios(
 funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100),
 sobrenome VARCHAR(100),
 contato VARCHAR(100),
 telefone INTEGER,
 data_cadastro VARCHAR(100)
) ENGINE=InnoDb;

CREATE TABLE Setor(
setor_id INT PRIMARY KEY AUTO_INCREMENT,
setor VARCHAR(100)
) ENGINE=InnoDb;

CREATE TABLE funcionario_setor(
funcionario_id INT NOT NULL,
setor_id INT NOT NULL,
FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(funcionario_id),
FOREIGN KEY (setor_id) REFERENCES Setor(setor_id)
) ENGINE=InnoDb;


INSERT INTO funcionario(funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');

INSERT INTO Funcionarios(
 funcionario_id,
 nome,
 sobrenome,
 contato,
 telefone,
 data_cadastro
) VALUES(
  12, 'Joseph', 'Rodrigues', 888888888, '2020-02-31 08:50:25');
  
  INSERT INTO Funcionarios(
 funcionario_id,
 nome,
 sobrenome,
 contato,
 telefone,
 data_cadastro
 ) VALUES ( 13, 'André', 'Freeman', 888888888, '2020-02-31');
  
  INSERT INTO Funcionarios(
 funcionario_id,
 nome,
 sobrenome,
 contato,
 telefone,
 data_cadastro
 ) VALUES (14, 'Cinthia', 'Duval', 888888888, '2020-02-31 10:55:35');
 
 INSERT INTO Funcionarios(funcionario_id,nome,sobrenome,contato,telefone,data_cadastro) VALUES (15, 'Fernanda', 'Mendes', 888888888, '2020-02-31 11:45:40');
