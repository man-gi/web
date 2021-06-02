
var index = 0;
var mylmage = document.getElementById("mainlmage");
var imageArray = ["icon1.png", "icon2.png", "icon3.png"];


function slideShow(){
    mylmage.setAttribute("src", imageArray[index]);
    index++;
    if(index >= imageArray.length){
        index = 0;
    }
}
setInterval(slideShow, 1000);