--Data Type in Js
https://262.ecma-international.org/10.0/

-Number     10,-3,10.9 etc
-String     "Prakhar", 'asdas',`asdad`
-Boolean    true,false
-Undefined  Something not defined yet but may be defined later.
            The Undefined type has exactly one value, called undefined. Any variable that has not been assigned a value has the value undefined.
-Object     If we have to store some keyvalue pair we use Objects
            keys will be unique

-Null       It actually represent empty value

Primitive types which are atomic in nature eg Number
Non Primitive types which are not atomic in nature and depends on primitive  eg Object.

What are falsy value in Js?
null,undefined,"",+0,-0,NaN,false


//concept of shortcircuting

Ques > console.log(10 && 6)-->prints 6??

In AND gate of first input is false it will return the first input,
else if first input is true it will return second input.
Similaryly in OR gate if first input is true it will return first input,
else if first_input is false it will return second input
(see demo.js)

Number -->Special Number--> +0,-0, NaN, Infinity and -Infinity
-0 signifies opposite x direction

===NaN(Not a Number)====

[abc, def, prd, as,ff, asd]
return index where prak string is present?

in such case we will return NaN

if there is a situation where we have to return a number but there is no valid possible no to be returned.
we use NaN there.

10/null -> Infinity
undefined/null --> NaN

Ques. Which is the only number in JS which is not equal to itself??
NaN.

Equality
strictly (===) and abstarct (==)

==
It will check the type of both operand if both are equal than it will call ===
If type are not same then type conversion occurs k/as Coercion and then comparsion is done.

===
It check the the types of both operands
If type are different it will return false,
If same value comparsion occurs

1 == '1'--> 1 === 1 --> true
1 == 'Prakhar" --> 1 == NaN --> 1===NaN --> false
console.log(NaN == NaN) ---> false.

see documentation

typeof operator

typeof null --> gives you undefined
historical mistake of JS



