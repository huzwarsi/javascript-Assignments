
// function myFunction(msg, n){
//     console.log(msg*n);
//     // console.log("I am Huzaifa");
// }

// myFunction("I Love JS",100);


// Functions ----> 2 numbers, sum;


// function sum(x,y){
//     // local variables
//     s = x + y;
//     console.log("before return");
//     return s;
    
// }

// let val = sum(3,4);
// console.log(val);


// sum function;

// function sum(x,y){
//     return x + y;
// }

//     const arrowSum =(x , y) =>{
//         console.log(x + y);
        
//     };


//     function mul(x,y){
   
//         return x * y;

//     }



//     const arrowMul = (x , y) =>{
//         console.log(x * y);
        
//     }
    

// const printHello = () =>{
//     console.log("Hello!")
// }

// printHello();



// Count Vowels

// function countVowels(str){
//     let count = 0;
//     for(let char of str){
//         if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//         }

//     }

//     console.log(count);
// }

// const countVow = (str) =>{
    
//     let count = 0;
//     for(const char of str){
//          if( char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//             count++;
//          }
         
//     }
//     return(count);
// }


// let nums = [1,2,8,4,5,6];

// arr.forEach(function printVal(val){
//     console.log(val);
    
// })
// arr.forEach((val)=>{

//     console.log(val.toUpperCase());
    
// })


// let calcSquare = (num) =>{
//     console.log(num * num);
// };

// nums.forEach(calcSquare);



let n = prompt("Enter a number");

let arr = [];

for(let i = 1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

let sum = arr.reduce((prev, curr)=>{
    return prev + curr;
})
console.log("sum =",sum);

let product = arr.reduce((prev,curr)=>{
    return prev * curr;
})
console.log("product =",product);
