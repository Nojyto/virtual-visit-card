'use strict';

const vantaBasicSettings = {
    el: "#animated-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xec2727,
    backgroundColor: 0x0d0d0d
};

const vantaMobileSettings = {
    points: 12.00,
    maxDistance: 20.00,
    spacing: 18.00
};

const vantaDesktopSettings = {
    points: 20.00,
    maxDistance: 24.00,
    spacing: 18.00,
}


AOS.init();
if (window.innerWidth < 760) {
    VANTA.NET({ ...vantaBasicSettings, ...vantaMobileSettings });
} else {
    VANTA.NET({ ...vantaBasicSettings, ...vantaDesktopSettings })
}


const SendToTopButton = document.getElementById("toTopBtn");
const ScrollIndicator = document.getElementById("scrollIndicator");


window.onload = async () => {
    await delay(5000);
    ScrollIndicator.style.display = "block";
}

window.onscroll = () => {
    scrollFunction();
    ScrollIndicator.style.display = "none";
};

window.addEventListener("contextmenu", e => e.preventDefault());


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        SendToTopButton.style.display = "block";
    } else {
        SendToTopButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function copyTextToClipboard(invokerElement, textToCopy) {
    navigator.clipboard.writeText(textToCopy);

    const tooltipElement = invokerElement.querySelector(".tooltiptext");
    const initialText = tooltipElement.innerText;
    
    tooltipElement.style.visibility = "visible";
    tooltipElement.innerText = "Copied!";

    await delay(800);

    tooltipElement.style.visibility = "";
    tooltipElement.innerText = initialText;
}