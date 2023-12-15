Topics
-- functional dependency
-- schema
-- axioms of functinal dependency
-- DB Keys
-- Normalisation

Database Schema
 -- blueprint of actual db that we'll create.
 -- how we'll store data, structure of table etc.

Functional Dependency
 columns -- attributes
 rows -- tuples
 defines relationship between two attributes

 X->Y
 X:Determinant
 Y:Dependent
 read as y is functionally dependent on x

 For every value of x we can uniquely determine y

 e_id e_name e_sal
 1     a     100
 2     b     200

 e_id->e_name
 e_id->e_sal

 e_name->e_sal (Not possible), two person with same name can have different salary

 Using functional dependency we'll end up normalisation

 can be verify fd ? in RDMS?
 whether particular table is following fd.
 for eg.
 CREATE ASSERTION emp_name
 CHECK (NOT EXIST (SELECT * FROM emp As E1, emp As E2 WHERE E1.e_id == E2.e_id AND E1.e_name<>E2.e_name));

 
