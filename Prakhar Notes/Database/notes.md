Lec 1 -- SQL

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



INSERT INTO second (Name, DoB, Gender) VALUES ("Sugam", DEFAULT, "MALE"),
                                              ("Kashif", "1998-09-12", "MALE"),
                                              ("Sneha", "1998-09-12", "FEMALE"),
                                              ("Rashmi", "1998-10-12", "FEMALE");

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

//Lecture 2 -- SQL

DELETE FROM <tablename> WHERE {comparsion} LIMIT <number>;

DELETE FROM second WHERE Name LIKE "_a%" ORDER BY Name LIMIT 1;

SELECT * FROM second;
+---------+------------+--------+
| Name    | DoB        | Gender |
+---------+------------+--------+
| Prakhar | 2000-02-01 | Male   |
| Prakhar | 2000-02-01 | Male   |
| Sugam   | 2000-02-01 | Male   |
| Sneha   | 1998-09-12 | Female |
| Rashmi  | 1998-10-12 | Female |
+---------+------------+--------+

DELETE complete rows;

Ex:
SELECT * FROM first;
+---------+------------+--------+
| Name    | DoB        | SALARY |
+---------+------------+--------+
| SARTHAK | 2023-02-09 |   1000 |
+---------+------------+--------+

DELETE FROM first;
Query OK, 1 row affected (0.01 sec)

SELECT * FROM first;
Empty set (0.00 sec)

//UPDATE

UPDATE <tablename> SET <colname1>=<value1>,<colname2>=<value2> WHERE <condition>;

example.
UPDATE Actors SET FirstName="Prakhar",SecondName="Agarwal" WHERE id=6;

 CREATE TABLE Actors (
            Id INT AUTO_INCREMENT PRIMARY KEY, //autoincrement column must be primary key
            FirstName VARCHAR(15) NOT NULL,
            SecondName VARCHAR(15),
            DoB DATE DEFAULT "2000-09-01",
            MartialStatus ENUM ("Married", "Single"),
            NetWorthMillions INT
            );

INSERT INTO Actors (FirstName, SecondName, DoB, MartialStatus, NetWorthMillions) VALUES
                                                ("Jahanvi", "Shukla", DEFAULT, "Married", 20),
                                                ("Anshu", "Kumar", "1998-12-4", "Single",15),
                                                ("Tanya", "Singh", DEFAULT, "Single", 12),
                                                ("Shikha", "Sharma", DEFAULT, "Single", 5),
                                                ("Vristhi", "Saxena", DEFAULT, "Married", 14);

select * from Actors;
+----+-----------+------------+------------+---------------+------------------+
| Id | FirstName | SecondName | DoB        | MartialStatus | NetWorthMillions |
+----+-----------+------------+------------+---------------+------------------+
|  1 | Jahanvi   | Shukla     | 2000-09-01 | Married       |               20 |
|  2 | Anshu     | Kumar      | 1998-12-04 | Single        |               15 |
|  3 | Tanya     | Singh      | 2000-09-01 | Single        |               12 |
|  4 | Shikha    | Sharma     | 2000-09-01 | Single        |                5 |
|  5 | Vristhi   | Saxena     | 2000-09-01 | Married       |               14 |
+----+-----------+------------+------------+---------------+------------------+

mysql> UPDATE Actors SET MartialStatus = "Single";

mysql> select * from Actors;
+----+-----------+------------+------------+---------------+------------------+
| Id | FirstName | SecondName | DoB        | MartialStatus | NetWorthMillions |
+----+-----------+------------+------------+---------------+------------------+
|  1 | Jahanvi   | Shukla     | 2000-09-01 | Single        |               20 |
|  2 | Anshu     | Kumar      | 1998-12-04 | Single        |               15 |
|  3 | Tanya     | Singh      | 2000-09-01 | Single        |               12 |
|  4 | Shikha    | Sharma     | 2000-09-01 | Single        |                5 |
|  5 | Vristhi   | Saxena     | 2000-09-01 | Single        |               14 |
+----+-----------+------------+------------+---------------+------------------+
5 rows in set (0.00 sec)

mysql> UPDATE Actors SET NetWorthMillions=11 WHERE id=5;


mysql> select * from Actors;
+----+-----------+------------+------------+---------------+------------------+
| Id | FirstName | SecondName | DoB        | MartialStatus | NetWorthMillions |
+----+-----------+------------+------------+---------------+------------------+
|  1 | Jahanvi   | Shukla     | 2000-09-01 | Single        |               20 |
|  2 | Anshu     | Kumar      | 1998-12-04 | Single        |               15 |
|  3 | Tanya     | Singh      | 2000-09-01 | Single        |               12 |
|  4 | Shikha    | Sharma     | 2000-09-01 | Single        |                5 |
|  5 | Vristhi   | Saxena     | 2000-09-01 | Single        |               11 |
+----+-----------+------------+------------+---------------+------------------+

//ALTER

altering the schema of database

ALTER TABLE <tablename> CHANGE <oldcolname> <newcolname> [datatype and constraint]
ALTER TABLE Actors CHANGE NetWorthMillions NetWorth DECIMAL(10,2);

ALTER TABLE <tablename> ADD <colname> <datatype> [constraint]
ALTER Table Actors ADD Region VARCHAR(10) DEFAULT "LUCKNOW";

+----+-----------+------------+------------+---------------+----------+---------+
| Id | FirstName | SecondName | DoB        | MartialStatus | NetWorth | Region  |
+----+-----------+------------+------------+---------------+----------+---------+
|  1 | Jahanvi   | Shukla     | 2000-09-01 | Single        |    20.00 | LUCKNOW |
|  2 | Anshu     | Kumar      | 1998-12-04 | Single        |    15.00 | LUCKNOW |
|  3 | Tanya     | Singh      | 2000-09-01 | Single        |    12.00 | LUCKNOW |
|  4 | Shikha    | Sharma     | 2000-09-01 | Single        |     5.00 | LUCKNOW |
|  5 | Vristhi   | Saxena     | 2000-09-01 | Single        |    11.00 | LUCKNOW |
|  6 | Pratiksha | NULL       | 2000-09-01 | Single        |    50.00 | LUCKNOW |
+----+-----------+------------+------------+---------------+----------+---------+

ALTER TABLE Actors ADD MiddleName VARCHAR(10) AFTER FirstName; 

+----+-----------+------------+------------+------------+---------------+----------+-----------+
| Id | FirstName | MiddleName | SecondName | DoB        | MartialStatus | NetWorth | Region    |
+----+-----------+------------+------------+------------+---------------+----------+-----------+
|  1 | Jahanvi   | NULL       | Shukla     | 2000-09-01 | Single        |    20.00 | Lucknow   |
|  2 | Anshu     | NULL       | Kumar      | 1998-12-04 | Single        |    15.00 | Hyderabad |
|  3 | Tanya     | NULL       | Singh      | 2000-09-01 | Single        |    12.00 | Lucknow   |
|  4 | Shikha    | NULL       | Sharma     | 2000-09-01 | Single        |     5.00 | Lucknow   |
|  5 | Vristhi   | NULL       | Saxena     | 2000-09-01 | Single        |    11.00 | Delhi     |
|  6 | Pratiksha | NULL       | NULL       | 2000-09-01 | Single        |    50.00 | Mumbai    |
+----+-----------+------------+------------+------------+---------------+----------+-----------+

ALTER TABLE Actors Drop MiddleName;






SELECT DOB As "Date of Birth" FROM Actors; // it is mainly used in JOINS

+---------------+
| Date of Birth |
+---------------+
| 2000-09-01    |
| 1998-12-04    |
| 2000-09-01    |
| 2000-09-01    |
| 2000-09-01    |
| 2000-09-01    |
+---------------+

//" and ' are one and the same;
SELECT CONCAT (FirstName, " ",  SecondName) FROM Actors;

+-------------------------------------+
| CONCAT (FirstName, " ",  SecondName) |
+-------------------------------------+
| Jahanvi Shukla                      |
| Anshu Kumar                         |
| Tanya Singh                         |
| Shikha Sharma                       |
| Vristhi Saxena                      |
| NULL                                |//Pratiksha Null
+-------------------------------------+

SELECT DISTINCT Region FROM Actors;
+-----------+
| Region    |
+-----------+
| Lucknow   |
| Hyderabad |
| Delhi     |
| Mumbai    |
+-----------+

 SELECT COUNT(*) As "Number People From Lucknow" FROM Actors WHERE Region="Lucknow" ;

+----------------------------+
| Number People From Lucknow |
+----------------------------+
|                          3 |
+----------------------------+

SELECT SUM(NetWorth) FROM Actors WHERE Region="LUCKNOW";

+---------------+
| SUM(NetWorth) |
+---------------+
|         37.00 |
+---------------+

SELECT AVG(NetWorth) FROM Actors WHERE Region="LUCKNOW"; 

+---------------+
| AVG(NetWorth) |
+---------------+
|     12.333333 |
+---------------+

MAX, MIN

//GROUP BY


After select you can use colname on which group by is applied and Aggregate function only (COUNT(*), MAX(NetWorth))

SELECT Region,COUNT(*) FROM ACTORS GROUP BY Region;
+-----------+----------+
| Region    | COUNT(*) |
+-----------+----------+
| Lucknow   |        3 |
| Hyderabad |        1 |
| Delhi     |        1 |
| Mumbai    |        1 |
+-----------+----------+


SELECT Region, MAX(NetWorth) FROM ACTORS GROUP BY Region;
+-----------+---------------+
| Region    | MAX(NetWorth) |
+-----------+---------------+
| Lucknow   |         20.00 |
| Hyderabad |         15.00 |
| Delhi     |         11.00 |
| Mumbai    |         50.00 |
+-----------+---------------+

//Having 

The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;

SELECT Region FROM Actors GROUP BY Region HAVING COUNT(*) > 1;


//Lecture 3