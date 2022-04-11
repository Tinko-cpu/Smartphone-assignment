
function chageH1(){
    let h1 = document.querySelector("h1");
    h1.textContent = "Welcome To Tinko Limited";
}

let changeBackground = function(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#FFEEEE"
}

let changeToFake = () =>{
    let address = document.querySelector(".address");
    address.textContent = "No 59, Wallworth Road Pecham street post code: rm1 15g";
}

function amazone(){
    let footer = document.querySelector("p");
    footer.classList.add("amazone");
}

function showImage(){
    let images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].classList.toggle("showImages")
    }
}

showImage()

function changePriceColor(){
    let prices = document.getElementsByClassName("myPrice");
    for (let price of prices) {
        price.style.color = "red";
    }
}

changePriceColor();