const box1=document.querySelector("#typo");
const box2=document.querySelector("#output")

box1.addEventListener("input",()=>{

   box2.value=box1.value;
   
});