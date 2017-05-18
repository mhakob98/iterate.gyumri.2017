'use strict'
let counter = 0;

 let some = setInterval (function(){
  console.log(`Called ${++counter} times`);
  if (counter===7)
  {
    clearInterval(some);
  }
},300)
