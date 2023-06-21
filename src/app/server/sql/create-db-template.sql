-- Active: 1687275460154@@127.0.0.1@3306

CREATE DATABASE Post;

USE Post;

CREATE TABLE
    Posts (
        PostID INT PRIMARY KEY AUTO_INCREMENT,
        Title VARCHAR(255),
        Content VARCHAR(1000),
        Views INT,
        Likes INT,
        Body TEXT
    );

DROP TABLE IF EXISTS Posts;

SELECT * FROM Posts;

INSERT INTO
    Posts (
        Title,
        Content,
        Views,
        Likes,
        Body
    )
VALUES ('제목1', '내용1', 100, 50, '본문1');

SELECT USER();