const images = [
  "0.png", "1.webp", "2.jpg", "3.jpg" 
];

const NUMBER_OF_IMAGE = images.length;

function viewRandomBackgroundImage(){
  const randomNumber = Math.floor(Math.random()*NUMBER_OF_IMAGE);
  const randomImage = images[randomNumber];
  const backgroundImage = document.createElement("img");
  
  backgroundImage.src = `img/${randomImage}`;

  document.body.prepend(backgroundImage);
}

// 처음 한번만 배경화면 설정
viewRandomBackgroundImage();