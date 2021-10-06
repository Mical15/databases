CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (username VARCHAR(20), messagetext VARCHAR(100), roomname VARCHAR(20));

CREATE TABLE users (userID VARCHAR(20), username VARCHAR(20));

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

