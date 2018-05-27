

DROP DATABASE IF EXISTS movie_data;

CREATE DATABASE movie_data;

USE movie_data;

CREATE TABLE movie_list (
  ID int AUTO_INCREMENT,
  Title varchar(50) NOT NULL,
  Year varchar(50) NOT NULL,
  Description varchar(300) NOT NULL,
  Rating int NOT NULL,
  PRIMARY KEY(ID)
);

