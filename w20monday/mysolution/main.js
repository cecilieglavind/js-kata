"use strict";

const cookieBox = document.querySelector("#cookie");
const btn = document.querySelector("button");

document.addEventListener("DOMContentLoaded", function(){
    runCookie();
});

function runCookie() {
    console.log("Slide In!!");

    cookieBox.classList.add("slideIn");

};

btn.addEventListener("click", function(){
    console.log("Slide out!!");

    cookieBox.classList.add("slideOut");

});