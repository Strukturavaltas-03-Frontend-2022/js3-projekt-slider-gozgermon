import { imageData } from "./imagedata.js"
//parameters:
let imageHeight = "600px"
let slideInterval=6000 //in miliseconds



//creat slides
let slideShowContainer = document.querySelector(".slideshow-container")
slideShowContainer.innerHTML = getAllSlides(imageData) + "<a class='prev' onclick='plusSlides(-1)'>❮</a>" + "<a class='next' onclick='plusSlides(1)'>❯</a>"
//set height parameter
let Images = document.querySelectorAll("img")
for (let i = 0; i < Images.length; i++) {
    Images[i].style.height = imageHeight
}

//create dots
let dotContainer=document.querySelector(".dotContainer")
dotContainer.innerHTML=createDots();

//start slide show
window.setInterval(()=>plusSlides(1),slideInterval)


let slideIndex = 1;
showSlides(slideIndex);


function createDots() {
    let resultVal=''
    for (let i = 0; i < imageData.files.length; i++) {
        resultVal=resultVal+`<span class="dot" onclick="currentSlide(${i+1})"></span>`
    }
    return resultVal
}


function createSlide(file, index, numOfFiles, Caption) {
    return `<div class="mySlides fade">
  <div class="numbertext">${index + 1} / ${numOfFiles}</div>
  <img src="${file}">
  <div class="text">${Caption}</div>
</div>`
}

function getAllSlides(imageData) {
    return imageData.files.map((item, index) => createSlide(item, index, imageData.files.length, imageData.captions[index])).join('')
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

window.plusSlides = plusSlides
window.currentSlide = currentSlide



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}