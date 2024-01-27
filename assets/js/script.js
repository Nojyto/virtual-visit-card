'use strict';


VANTA.NET({
    el: "#animated-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    points: 20.00,
    maxDistance: 24.00,
    spacing: 18.00,
    color: 0xec2727,
    backgroundColor: 0x0d0d0d
})


window.addEventListener("contextmenu", e => e.preventDefault());


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