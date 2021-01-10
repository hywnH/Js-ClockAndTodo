const body = document.querySelector("body");
const IMG_NUMBER = 4;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    var image = new Image();
    image.src = `background/img${imgNumber}.jpg`;
    image.classList.add('bgImage');
    body.prepend(image);
}

function genRandom(){
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();