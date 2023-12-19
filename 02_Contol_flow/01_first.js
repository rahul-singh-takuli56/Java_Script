//== (Equality Operator):
// compare only values after converting to same data types

if (2 == '2') // its doesn't check datatype of operands
    console.log(true);
else
    console.log(true);



// === (Strict Equality Operator):

if (2 === '2') // === check opernds and data types too 
    console.log(true);
else
    console.log(true);


//Nullsish Colescing Operator (??) : null defined

let val;
val = 4 ?? 4;
console.log(val);

val = null ?? 43
console.log(val);
