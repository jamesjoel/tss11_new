
// Functions are block of code which can run when we call that function.

// there are 3 type of function
/*
    1. Simple Fun
    2. Parameterized Fun
    3. Return Type Fun

*/

function demo(a=10, b=10) // create a fun
{
    // let a = 10;
    // let b = 30;
    let c = a*b;
    let ans = c/2;
    console.log(ans);
}

function gst(am=1000, sl=1)
{
    const f = 5;
    const s = 8;
    const t = 18;
    let ans;
    if(sl==1)
    {
        ans = am*f/100;
        
    }
    if(sl==2)
    {
        ans = am*s/100;
       
    }
    if(sl==3)
    {
        ans = am*t/100;
        
    }
    let gst = am+ans;
    console.log(gst);
}

let a = 7000;
let b = 3;
gst();
gst(7000);
gst(a, b);

