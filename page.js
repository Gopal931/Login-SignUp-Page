let signin=document.querySelector(".signIn");
let signup=document.querySelector(".signUp");
let nameInput=document.querySelector(".inputname");
let title=document.querySelector(".title");
let para=document.querySelector(".para");
let line=document.querySelector(".underline");

signin.addEventListener("click",()=>{
    nameInput.style.maxHeight='0';
    nameInput.style.padding = '0';
title.innerHTML="Sign In";
signup.classList.add("disable");
signin.classList.remove("disable");
para.innerHTML='Lost Password ';
line.style.transform='translate(35px)';
    
});
signup.addEventListener("click",()=>{
    nameInput.style.maxHeight='60px';
    nameInput.style.padding = '10px';
title.innerHTML="Sign Up";
signup.classList.remove("disable");
signin.classList.add("disable");
para.innerHTML='Password Suggestion ';
line.style.transform='translate(0)';
});