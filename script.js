const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    const currnetColor = h1.style.color;
    let newColor;
    if(currnetColor !== "blue"){
        newColor = "blue";
    }
    else{
        newColor = "tomato";
    }
    h1.style.color = newColor;
}


h1.addEventListener("click", handleTitleClick);
