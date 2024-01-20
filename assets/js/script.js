'use strict';

const copyEmailPopup = document.getElementById("myPopup");

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function copyEmailToClipboard(email) {
    navigator.clipboard.writeText(email);
    copyEmailPopup.innerText = "Copied!";
    await delay(1500);
    copyEmailPopup.innerText = "Copy email";
}