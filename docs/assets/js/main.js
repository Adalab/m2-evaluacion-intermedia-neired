"use strict";function getRandomNumber(e){return Math.ceil(Math.random()*e)}const myRandomNumber=getRandomNumber(100);console.log(`Mi número aleatorio es ${myRandomNumber}`);const btn=document.querySelector(".btn"),input=document.querySelector(".input"),clue=document.querySelector(".clue"),counter=document.querySelector(".counter");function compareNumbers(e){console.log(input.value),counter.innerHTML=parseInt(counter.innerHTML)+1,input.value>myRandomNumber?clue.innerHTML="demasiado alto":input.value<myRandomNumber?clue.innerHTML="demasiado bajo":clue.innerHTML="¡HAS GANADO, CAMPEONA!"}btn.addEventListener("click",compareNumbers);