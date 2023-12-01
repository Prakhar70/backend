For installation refer
    -- MySql Prakhar@21 --> MySQl Password
    -- MySql 8.0.28 --> MySql Version installed
    -- https://www.youtube.com/watch?v=aWZKws7RWic&ab_channel=Mukeshotwani

**LEARN ABOUT VARIOUS DATATYPE**

<!-- command to login to mySql using terminal -->
mysql -u root -p


// to create  a table
SHOW DATABASES;
// to show all the databases available in your system

USE <database name>;
// to select particular database to run queries on

SHOW TABLES;
//to list down all the tables (entity set) of selected database

CREATE DATABASE <databasename>
eg. CREATE DATABASE backend
//creating a database

CREATE TABLE <tablename> {
    <column name 1> <datatype> [constraint],
    <column name 2> <datatype> [constraint],
    .
    .
}
eg: CREATE TABLE first (Name VARCHAR(15), DoB DATE, SALARY DECIMAL);

// create table

DESC <tablename>;
eg. DESC first;
// gives deatils of the table
+--------+---------------+------+-----+---------+-------+
| Field  | Type          | Null | Key | Default | Extra |
+--------+---------------+------+-----+---------+-------+
| Name   | varchar(15)   | YES  |     | NULL    |       |
| DoB    | date          | YES  |     | NULL    |       |
| SALARY | decimal(10,0) | YES  |     | NULL    |       |
+--------+---------------+------+-----+---------+-------+

INSERT INTO <tablename>(col1,col2, ....) VALUES (<value1>, <value2>);

eg. INSERT INTO first (Name , DOB, SALARY) VALUES ("SARTHAK","2023-02-09",1000.0);
//adds the entity to entity set (table)

SELECT <colname> FROM <tablename>
if all use *
eg SELECT * FROM first;

+---------+------------+--------+
| Name    | DoB        | SALARY |
+---------+------------+--------+
| SARTHAK | 2023-02-09 |   1000 |
+---------+------------+--------+

//Created the table with constraint in attribute 
CREATE TABLE second (Name VARCHAR (15) NOT NULL, DoB DATE DEFAULT "2000-02-01", Gender ENUM ("Male", "Female","Other"));

DESC  second;

+--------+-------------------------------+------+-----+------------+-------+
| Field  | Type                          | Null | Key | Default    | Extra |
+--------+-------------------------------+------+-----+------------+-------+
| Name   | varchar(15)                   | NO   |     | NULL       |       |
| DoB    | date                          | YES  |     | 2000-02-01 |       |
| Gender | enum('Male','Female','Other') | YES  |     | NULL       |       |
+--------+-------------------------------+------+-----+------------+-------+

INSERT INTO second (Name, DoB, Gender) VALUES("Prakhar", DEFAULT, "MALE");

SELECT * from second;
+---------+------------+--------+
| Name    | DoB        | Gender |
+---------+------------+--------+
| Prakhar | 2000-02-01 | Male   |
+---------+------------+--------+

