

CREATE DATABASE movies;

USE movies;

CREATE TABLE movie_data (
  id int, NOT NULL,
  title varchar(50), NOT NULL,
  year varchar(50), NOT NULL,
  description varchar(300), NOT NULL,
  rating int, NOT NULL,
  PRIMARY KEY(id),
)

