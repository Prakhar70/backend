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

INSERT INTO second (Name, DoB, Gender) VALUES("Prakhar", DEFAULT, "MALEEE");
ERROR 1265 (01000): Data truncated for column 'Gender' at row 1


INSERT INTO second (Name, DoB, Gender) VALUES("Sugam", DEFAULT, "MALE"),("Kashif", "1998-09-12", "MALE"),("Sneha", "1998-09-12", "FEMALE"),("Rashmi", "1998-10-12", "FEMALE");

SELECT * from second;
+---------+------------+--------+
| Name    | DoB        | Gender |
+---------+------------+--------+
| Prakhar | 2000-02-01 | Male   |
| Prakhar | 2000-02-01 | Male   |
| Sugam   | 2000-02-01 | Male   |
| Kashif  | 1998-09-12 | Male   |
| Sneha   | 1998-09-12 | Female |
| Rashmi  | 1998-10-12 | Female |
+---------+------------+--------+

SELECT DoB from second WHERE Gender = "Male";
+------------+
| DoB        |
+------------+
| 2000-02-01 |
| 2000-02-01 |
| 2000-02-01 |
| 1998-09-12 |
+------------+
4 rows in set (0.00 sec)

SELECT Name,DoB from second WHERE Gender = "Male";
+---------+------------+
| Name    | DoB        |
+---------+------------+
| Prakhar | 2000-02-01 |
| Prakhar | 2000-02-01 |
| Sugam   | 2000-02-01 |
| Kashif  | 1998-09-12 |
+---------+------------+
4 rows in set (0.00 sec)

SELECT * from second WHERE Name LIKE "%r%";// contains "r"
+---------+------------+--------+
| Name    | DoB        | Gender |
+---------+------------+--------+
| Prakhar | 2000-02-01 | Male   |
| Prakhar | 2000-02-01 | Male   |
| Rashmi  | 1998-10-12 | Female |
+---------+------------+--------+
3 rows in set (0.00 sec)

% -> means any number of character/s
_ -> means single character

SELECT * from second WHERE Name LIKE "_ashmi";
+--------+------------+--------+
| Name   | DoB        | Gender |
+--------+------------+--------+
| Rashmi | 1998-10-12 | Female |
+--------+------------+--------+

SELECT * FROM second ORDER BY Name;

+---------+------------+--------+
| Name    | DoB        | Gender |
+---------+------------+--------+
| Kashif  | 1998-09-12 | Male   |
| Prakhar | 2000-02-01 | Male   |
| Prakhar | 2000-02-01 | Male   |
| Rashmi  | 1998-10-12 | Female |
| Sneha   | 1998-09-12 | Female |
| Sugam   | 2000-02-01 | Male   |
+---------+------------+--------+

SELECT * FROM second ORDER BY Name DESC;
+---------+------------+--------+
| Name    | DoB        | Gender |
+---------+------------+--------+
| Sugam   | 2000-02-01 | Male   |
| Sneha   | 1998-09-12 | Female |
| Rashmi  | 1998-10-12 | Female |
| Prakhar | 2000-02-01 | Male   |
| Prakhar | 2000-02-01 | Male   |
| Kashif  | 1998-09-12 | Male   |
+---------+------------+--------+
To find the 2 youngest person.

SELECT Name FROM second ORDER BY DOB LIMIT 2;

+--------+
| Name   |
+--------+
| Kashif |
| Sneha  |
+--------+

To find the 2 youngest girl.

SELECT Name FROM second WHERE GENDER = 'Female' ORDER BY DOB LIMIT 2;
+--------+
| Name   |
+--------+
| Sneha  |
| Rashmi |
+--------+
