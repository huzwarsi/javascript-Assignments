// For Loop

// for ( let i = 1; i<=5; i++){
//     console.log("i = ",i);
// }


// for (let i=0; i<=1000; i++){
//     console.log("i =",i);
    
// }

// for(let i=0; i>=-500; i--){
//     console.log("i =",i);
    
// }

// console.log("Loop has ended");


// while loop;

// let i = 1;
// while(i<= 10){
//     console.log("Hello World")
//     i++;
// }

// let i = 0;
// while(i<=1000){
//     console.log("i =", i)
//     i++;
// }


// let i = 1;
// while(i<=10){
//     console.log("i =", i)
//     i++;
// }


// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// } while(i<=20);


let str = "Huzaifa Ali Warsi";

for(let i of str){  //illeterate
    console.log("i =", i);
}


// let str = "JavaScript";

// let size = 0;
// for(let i of str){
//     console.log("i =",i);
//     size++;
// }
//     console.log("string size =", size);
    
////////For Of Loop;/////////////////////////
// let str = "Apna college ka bacha hun ma";
// let size = 0;
// for (let i of str){
//     console.log("i =",i);
//     size++;
// }

// console.log("string size =",size);


//////////////For in Loop////////////////////////

// let student = {
//     name: "Huzaifa Ali Warsi",
//     age : 19,
//     cgpa : 7.5,
//     isPass: true,
// };

// for(let key in student){
//     console.log("key =", key, "value =", student[key]);
// }

// let students = {
//     name: "Huzaifa Ali Warsi",
//     age : 19,
//     cgpa : 7.5,
//     isPass : true,
// };

//  for(let key in students){
//     console.log("key =", key, "value =", students[key]);

//  }



// Practice Set
// Print all even numbers from 0 to 100.


// for(let i = 1; i<=100; i++){
//     if(i%2 !==0){
//         console.log("i =",i);
//     }
// }



// let gameNum = 25;
// let userNum = prompt("Guess The Game Number : ");
// console.log(userNum);

// let gameNum = 25;
// let userNum = Number(prompt("Guess the game number"));  // convert string → number

// while (userNum !== gameNum) {
//     userNum = Number(prompt("Wrong Guess Again!")); // fir se number banaye
// }

// console.log("Congratulations 🎉 You guessed right!");



// String//////////////////////////////////


// let str = "Apna College";

// console.log(str[6]);


// let specialString = `This is a template literal`;
// console.log(specialString);

//  let obj = {
//     item : "price",
//     price : 30,
//  };

//  let output = `The cost of ${obj.item} is ${obj.price} rupees`;
//  console.log(output);



// let str = "Huzaifa\nwarsi";

// console.log(str.length);


//  for(let i = 1; i<=10; i++){
//    console.log('i =',i);
//  }

// for(let i=1; i<=20; i++){
//    if(i%2 === 0){
//       console.log("i =", i)
//    }
// }

// for(let i = 10; i >= 1; i--){
//    console.log("i =",i);
// }


// let sum = 0;

// for(let i=1; i<=10; i++){
//    sum = sum +i;
   
// }
// console.log("sum =", sum);


// for(let i = 1; i<=10; i++){
//    console.log(`5 x ${i} = ${5*i}`);
// }


// let str = '0123456';

// console.log(str.slice(0,3));

// let str1 = "Apna";
// let str2 = "College";
// let result = "I am learning coding from " + str1 +str2;
// console.log(result);

// let str = "Hellollo";

// console.log(str.replaceAll("l", "p"));


// let str = "ILoveJS";

// console.log(str.charAt(5));

let fullName = prompt("Enter your name");
fullName = fullName.toLowerCase();
fullName = fullName.trim()
let noGaps = fullName.replace(/\s/g, '');
let username = "@" + noGaps + fullName.length;

console.log(username);

// let fullName = prompt("Enter your name");
// fullName = fullName.toLowerCase();
// fullName = fullName.trim();
// let noGaps = fullName.replace(/\s/g, '');
// let username = "@" + fullName + fullName.length;

// console.log(username);
