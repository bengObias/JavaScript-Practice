const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const title = document.querySelector('h1'); 

const now = new Date();
const currentDate = `${now.getMonth()} - ${now.getDate()} - ${now.getFullYear()}`;
title.innerHTML = currentDate;

function setDate(){
    //gets current date including time
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDeg = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    const minutes = now.getMinutes();
    const minDeg = ((minutes/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hours = now.getHours();
    const hourDeg = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

// setDate function will run every 1 second
setInterval(setDate, 1000)  
