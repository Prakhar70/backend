//JOINS
Tables are the related to itself

RIGHT, LEFT, INNER, OUTER +[SElF JOIN]

SELECT * FROM <tablename1> INNER JOIN <tablename2> ON <condition>
//following all same result
SELECT * FROM Actors INNER JOIN DigitalAssests ON Actors.id = DigitalAssets.id;
SELECT * FROM Actors INNER JOIN DigitalAssests USING(id)
SELECT * FROM Actors NATURAL JOIN DigitalAssests

SELECT * FROM Actors, DigitalAssets --> will do the cartesian product
SELECT * FROM Actors, DigitalAssets WHERE Actors.id = DigitalAssets.id;



//UNION
it will simply list all the entities of both the table Provided column count is same.(datatype and constraint will not be considered)


//INNER JOIN

SELECT Employees.EmployeeID, Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
INNER JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

+------------+-----------+----------+--------------+
| EmployeeID | FirstName | LastName | DepartmentID |
+------------+-----------+----------+--------------+
|          1 | John      | Doe      |          101 |
|          2 | Jane      | Smith    |          102 |
|          3 | Bob       | Johnson  |          103 |
|          3 | Alice     | Williams |          103 |
|          5 | Prakhar   | Agarwal  |          112 |
+------------+-----------+----------+--------------+

+--------------+----------------+
| DepartmentID | DepartmentName |
+--------------+----------------+
|          101 | HR             |
|          102 | IT             |
|          103 | Finance        |
|          103 | CIS            |
|          120 | Marketing      |
+--------------+----------------+

+------------+-----------+----------+----------------+
| EmployeeID | FirstName | LastName | DepartmentName |
+------------+-----------+----------+----------------+
|          1 | John      | Doe      | HR             |
|          2 | Jane      | Smith    | IT             |
|          3 | Alice     | Williams | Finance        |
|          3 | Bob       | Johnson  | Finance        |
|          3 | Alice     | Williams | CIS            |
|          3 | Bob       | Johnson  | CIS            |
+------------+-----------+----------+----------------+


//LEFT JOIN


SELECT Employees.EmployeeID, Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
LEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

+------------+-----------+----------+----------------+
| EmployeeID | FirstName | LastName | DepartmentName |
+------------+-----------+----------+----------------+
|          1 | John      | Doe      | HR             |
|          2 | Jane      | Smith    | IT             |
|          3 | Bob       | Johnson  | CIS            |
|          3 | Bob       | Johnson  | Finance        |
|          3 | Alice     | Williams | CIS            |
|          3 | Alice     | Williams | Finance        |
|          5 | Prakhar   | Agarwal  | NULL           |
+------------+-----------+----------+----------------+

//RIGHT JOIN

SELECT Employees.EmployeeID, Employees.FirstName, Employees.LastName, Departments.DepartmentName
FROM Employees
LEFT JOIN Departments ON Employees.DepartmentID = Departments.DepartmentID;

+------------+-----------+----------+----------------+
| EmployeeID | FirstName | LastName | DepartmentName |
+------------+-----------+----------+----------------+
|          1 | John      | Doe      | HR             |
|          2 | Jane      | Smith    | IT             |
|          3 | Alice     | Williams | Finance        |
|          3 | Bob       | Johnson  | Finance        |
|          3 | Alice     | Williams | CIS            |
|          3 | Bob       | Johnson  | CIS            |
|       NULL | NULL      | NULL     | Marketing      |
+------------+-----------+----------+----------------+

//OUTER JOIN

MySQL doesnt provide FULL OUTER JOIN
-- Emulating FULL OUTER JOIN using LEFT JOIN and RIGHT JOIN
SELECT
    Employees.EmployeeID,
    Employees.FirstName,
    Employees.LastName,
    Departments.DepartmentName
FROM
    Employees
LEFT JOIN
    Departments ON Employees.DepartmentID = Departments.DepartmentID

UNION

SELECT
    Employees.EmployeeID,
    Employees.FirstName,
    Employees.LastName,
    Departments.DepartmentName
FROM
    Employees
RIGHT JOIN
    Departments ON Employees.DepartmentID = Departments.DepartmentID
WHERE
    Employees.EmployeeID IS NULL;

+------------+-----------+----------+----------------+
| EmployeeID | FirstName | LastName | DepartmentName |
+------------+-----------+----------+----------------+
|          1 | John      | Doe      | HR             |
|          2 | Jane      | Smith    | IT             |
|          3 | Bob       | Johnson  | CIS            |
|          3 | Bob       | Johnson  | Finance        |
|          3 | Alice     | Williams | CIS            |
|          3 | Alice     | Williams | Finance        |
|          5 | Prakhar   | Agarwal  | NULL           |
|       NULL | NULL      | NULL     | Marketing      |
+------------+-----------+----------+----------------+

SELF JOIN

A self-join is a specific case of a relational join where a table is joined with itself.

SELECT
    e1.EmployeeID AS EmployeeID,
    e1.FirstName AS EmployeeFirstName,
    e1.LastName AS EmployeeLastName,
    e2.EmployeeID AS ManagerID,
    e2.FirstName AS ManagerFirstName,
    e2.LastName AS ManagerLastName
FROM
    Employees e1
LEFT JOIN
    Employees e2 ON e1.ManagerID = e2.EmployeeID;


EmployeeID	FirstName	LastName	ManagerID
1	        John	    Doe	        3
2	        Jane	    Smith	    3
3	        Bob	        Johnson	    NULL
4	        Alice	    Williams	2



EmployeeID	EmployeeFirstName	EmployeeLastName	ManagerID	ManagerFirstName	ManagerLastName
1	        John	            Doe	                3	        Bob	                Johnson
2	        Jane	            Smith	            3	        Bob	                Johnson
3	        Bob	                Johnson	            NULL	    NULL	            NULL
4	        Alice	            Williams	        2	        Jane	            Smith