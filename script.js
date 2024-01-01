"use strict";

// Selecting elements
const follower=document.getElementById("follower");
const body=document.getElementById("body");

const image1 = document.getElementById("img1");
const icon1 = document.getElementById("i1");

const image2 = document.getElementById("img2");
const icon2 = document.getElementById("i2");

const image3 = document.getElementById("img3");
const icon3 = document.getElementById("i3");

const image4 = document.getElementById("img4");
const icon4 = document.getElementById("i4");

const card1=document.getElementsByClassName("card")[0];
const card2=document.getElementsByClassName("card")[1];
const card3=document.getElementsByClassName("card")[2];
const card4=document.getElementsByClassName("card")[3];
const head1=document.getElementsByClassName("head")[0];


// Functions




function heart1() {
    icon1.style.transform="scale(1.2)";
    setTimeout(function(){
        icon1.style.transform="scale(0)";

    },1000) //1000 means 1 second
};

function heart2() {
    icon2.style.transform="scale(1.2)";
    setTimeout(function(){
        icon2.style.transform="scale(0)";

    },1000) //1000 means 1 second
};

function heart3() {
    icon3.style.transform="scale(1.2)";
    setTimeout(function(){
        icon3.style.transform="scale(0)";

    },1000) //1000 means 1 second
};

function heart4() {
    icon4.style.transform="scale(1.2)";
    setTimeout(function(){
        icon4.style.transform="scale(0)";

    },1000) //1000 means 1 second
};

image1.addEventListener("dblclick",heart1);
image2.addEventListener("dblclick",heart2);
image3.addEventListener("dblclick",heart3);
image4.addEventListener("dblclick",heart4);





function motion(coordinates){
    // console.log(coordinates); //coordinate is parameter as well as object
    follower.style.left=coordinates.clientX+"px";
    follower.style.top=coordinates.clientY+"px";
    if (coordinates.clientX<=750){
        card1.style.transform=`rotate(${coordinates.clientX*0.02-25}deg)`;
        card2.style.transform=`rotate(${coordinates.clientX*0.02-25}deg)`;
        card3.style.transform=`rotate(${coordinates.clientX*0.02-25}deg)`;
        card4.style.transform=`rotate(${coordinates.clientX*0.02-25}deg)`;
    }
    else if(coordinates.clientX>750) {
        card1.style.transform=`rotate(${coordinates.clientX*0.02}deg)`;
        card2.style.transform=`rotate(${coordinates.clientX*0.02}deg)`;
        card3.style.transform=`rotate(${coordinates.clientX*0.02}deg)`;
        card4.style.transform=`rotate(${coordinates.clientX*0.02}deg)`;
    }
    if(coordinates.clientX<=750 && coordinates.clientY<=400) {
        body.style.backgroundImage=`url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    }
    else if(coordinates.clientX>751 && coordinates.clientY>400){
        body.style.backgroundImage=`url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    }
    else if(coordinates.clientX<=400 && coordinates.clientY<=750){
        body.style.backgroundImage=`url(https://plus.unsplash.com/premium_photo-1675826774815-35b8a48ddc2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    }
    else if(coordinates.clientX>751 && coordinates.clientY<400){
        body.style.backgroundImage=`url(https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`;
    }

}



function keyStrokes(event) {
    if(event.key==="p" || event.key==="P") {
        head1.style.color="#F11A7B";


    }
    else if (event.key==="r" || event.key==="R"){
        head1.style.color="#E21818";


    }
    else if (event.key==="o" || event.key==="O"){
        head1.style.color="#E36414";


    }
    else if (event.key==="y" || event.key==="Y"){
        head1.style.color="#FFC436";


    }
    else if (event.key==="g" || event.key==="G"){
        head1.style.color="#65B741";
    }
    else if (event.key==="b" || event.key==="B"){
        head1.style.color="#3887BE";
    }
    else if (event.key==="l" || event.key==="L"){
        head1.style.color="black";
    }
}

body.addEventListener("keydown",keyStrokes);
body.addEventListener("mousemove",motion)
const location1="India";
console.log(`I live in ${location1}`);