
let body = document.querySelector("body");
let modeBtn = document.getElementById("mode");
let currMode = "light";
let container = document.getElementById("container");
// container.prepend(modeBtn)



modeBtn.onclick  = () =>{
    if(currMode === "light" ){
      currMode = "dark";
      body.classList.remove("light");
      body.classList.add("dark");
    } else{
      currMode = "light";
      body.classList.remove("dark");
      body.classList.add("light");

    }
};

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let  addbtn = document.getElementById("addbtn");
let subbtn = document.getElementById("subbtn");
let devidebtn = document.getElementById("devidebtn");
let prodbtn = document.getElementById("prodbtn");

let result = document.getElementById("result");

addbtn.onclick = ()=>{
    let sum = Number(input1.value) + Number(input2.value);
    result.innerText = "Result = " + sum;
}

subbtn.onclick = ()=>{
    let sub = Number(input1.value) - Number(input2.value);
    result.innerText = "Result = " + sub;
}

devidebtn.onclick = ()=>{
    let devide = Number(input1.value) / Number(input2.value);
    result.innerText = "Result = " + devide;
}
prodbtn.onclick = ()=>{
    let product  = Number(input1.value) * Number(input2.value);
    result.innerText = "Result = " + product;
}


document.getElementById("modbtn").onclick = () => {
  result.innerText = "Result = " + (+input1.value % +input2.value);
};

document.getElementById("powbtn").onclick = () => {
  result.innerText = "Result = " + Math.pow(+input1.value, +input2.value);
};

document.getElementById("sqrtbtn").onclick = () => {
  result.innerText = "√" + input1.value + " = " + Math.sqrt(+input1.value);
};

document.getElementById("clearbtn").onclick = () => {
  input1.value = "";
  input2.value = "";
  result.innerText = "";
};
 

