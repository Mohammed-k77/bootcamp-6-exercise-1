const slides =document.getElementsByClassName('slide');

let translate = 0;

function nextSlide(){

    if(translate > -(slides.length-3)*(100/9)){
        translate -=100/slides.length;
        document.getElementsByClassName('inner')[0].style.transform=`translateX(${translate}%)`;
    }        
}

function previousSlide(){

    if(translate<0){
        translate +=100/slides.length;
        document.getElementsByClassName('inner')[0].style.transform=`translateX(${translate}%)`;
    }
}