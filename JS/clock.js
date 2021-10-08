const clock = document.querySelector("#clock");

let date = new Date();

function  getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// 인터벌 시작 전 한번 미리 실행
getClock();
setInterval(getClock, 1000);