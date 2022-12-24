/*let a = "white";
let obj = { name : "rohit" };
let data = ["red", "green", "blue", a, obj];
console.log(data);
*/
/*
let data = [
    "red",
    "green",
    "blue",
    {
        name : "rohit",
        age : 25,
        city : "indore"
    },
    {
        name : "amar",
        age : 30,
        city : "mumbai"
    }
];
console.log(data[4].city);
*/

let data = {
    demo :{
        name : "rohit",
        age : 25,
        color : ["red", "green", "blue"]
    }
}

console.log(data.demo.color[2]);



let info = {
    user1 : {
        name : ["amar", "vijay"]
    },
    user2 : {
        name : ["vishal", "rohit", "gaurav", "jaya"]
    }
}

let x = info.user2.name[3];



let y = data[3].info.user.name[2];

