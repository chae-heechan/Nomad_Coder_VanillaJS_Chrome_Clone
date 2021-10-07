const clock = document.querySelector("#clock");

let date = new Date();

function  getClock(){
  const date = new Date();
  clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock();
setInterval(getClock, 1000);