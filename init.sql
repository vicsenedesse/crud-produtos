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

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (6,'Pizza Calabresa Sadia 460 G','2021-03-26','12,49', 'Alimentos');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (7,'Suco de Uva Integral Aurora 1,5 L','2021-01-20','18,88', 'Alimentos');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (8,'Roupa para Cachorro Lisa Preto M','2020-12-31','30,90', 'Petshop');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (9,'Ração Para Gatos Whiskas Carne 3kg','2021-06-11','19,90', 'Petshop');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (10,'Bola de Vôlei Mikasa Good Vibes Azul Rosa','2020-07-19','99,99', 'Esporte');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (11,'Studio básico de pilates - zilmóveis','2021-05-30','24.649,60', 'Esporte');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (12,'Inoar Kit Argan Oil Shampoo + Condicionador 1L','2021-01-29','39,80', 'Higiene');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (13,'Cadeira Gamer DT3sports Romeo, Red - 11206-0','2021-08-10','1.599,95', 'Móveis');

INSERT INTO produto(id, descricao, data, preco, categoria) 
VALUES (14,'Amaciante Comfort Concentrado Glamour 1L','2021-04-12','13,90', 'Limpeza');
