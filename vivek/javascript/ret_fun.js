
// Functions are block of code which can run when we call that function.

// there are 3 type of function
/*
    1. Simple Fun
    2. Parameterized Fun
    3. Return Type Fun

*/
// Return Type Funcion

function demo(a, b)
{
    let c = a*b;
    let ans = c/2;
    return ans;
    
}
let x = demo(4, 8);
function qube(a)
{
    return a*a*a;
}

function test()
{
    return "The Stepping Stone";
}


let ans = qube(5);
console.log(ans);
let y = test();
console.log(y);