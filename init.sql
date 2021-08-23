CREATE DATABASE IF NOT EXISTS db_produtos;
USE db_produtos;


CREATE TABLE produto (
  id INT AUTO_INCREMENT NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  data VARCHAR(10) DEFAULT 'Disponível',
  preco VARCHAR(20) NOT NULL,
  categoria VARCHAR(50) NOT NULL,

  PRIMARY KEY (id)
);


INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (1,'Notebook AVELL i7 8GB GeForce RTX 3070','2021-08-27','19.996,00', 'Eletrônicos');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (2,'Delineador Cat Eyes Thin - Spot - MariMaria','2021-09-24','45,90', 'Beleza');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (3,'Violão Acústico Giannini N-14 Start Nylon Natural','2021-10-04','379,91', 'Música');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (4,'Engenharia de Software Moderna Capa comum – 1 junho 2020', 'Disponível', '65,95', 'Livros');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (5,'Avril Lavigne Let Go Cd 2002','2021-10-20','45,33', 'Música');
