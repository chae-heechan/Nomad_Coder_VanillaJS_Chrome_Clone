const quotes = [
  {
    quote: "어둡고 깊었던 밤은 끝을 맞이할 것이다.",
    author: "작자미상",
  },
  {
    quote: "오늘이 마지막날인 것처럼 달려라.",
    author: "이혜주",
  },
  {
    quote: "기회는 일어나는 것이 아니라  만들어 내는 것이다.",
    author: "크리스 그로서",
  },
  {
    quote: "머리가 지끈거리고 포기하고 싶어질 때, 포기하지 마라. 그것이 진정으로 당신이 잘 이겨내고 있다는 증거이다.",
    author: "작자미상",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const NUMBER_OF_QUOTES = quotes.length;

function viewRandomQuote(){
  const randomNumber = Math.floor(Math.random()*NUMBER_OF_QUOTES);
  quote.innerText = quotes[randomNumber].quote;
  author.innerText = quotes[randomNumber].author;
}

viewRandomQuote();