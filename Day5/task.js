//ES6=>ECMA Script Standard 6
//1.variable declarations->refer variables.js

//2.Scope
//var-global scope
//let-local/block scope
//const-global scope

var a=10
const con = 3.14
console.log(a)
console.log(con)
{
    let a=20
    let b=30
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(con);

//3.class and objects

class ClassEg{
    constructor()
{
    this.a=10
}    
}

obj=new ClassEg()
console.log(obj.funInClass())
console.log(obj.a);

//4.Arrow function
funInClass=()=>{
    console.log(this.a);

}

//Ternary Operator
//a=11
//console.log((a%2==0)?"Even":"Odd");

//6.Spread Operator
a=[10,20,30,40]
b=[50,60,70]
c=[...b,...a]
console.log(c);

//7.Rest Operator[...]

function restOpEg(a,b,...arg)
{
   console.log(a);
   console.log(b);
    console.log(arg)
}

restOpEg(10,20,30,40,50)

//8.Destructing Operator

//var array=[10,20,30]
//var [a,b,c,d]=array
//console.log(a,b,c,d);

//9.Hoisting
//Variable hoisting
console.log(a);
var a=10;
console.log(b);
let b=10;
console.log(c);
const c=10;




//2.function hoisting
console.log(fun());
function fun(){
    return 10
}
console.log(fun())
return 10