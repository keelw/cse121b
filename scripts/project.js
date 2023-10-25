import {getConversion, getTotals} from "./currency.js";

let cadBox = document.querySelector("#cad");
let usdBox = document.querySelector("#usd");
let litersBox = document.querySelector("#liters");
let gallonsBox = document.querySelector("#gallons");
const button = document.querySelector("#compute");

// listen to the button
button.addEventListener("click", () => {
    // convert and display the currency when the user hits the button
    getConversion(cadBox.value);
    let dollarsCAD = cadBox.value;
    
    // convert and display the volume when the user hits the button
    let gallons = convertVolume(litersBox.value);
    gallonsBox.setAttribute("value", `${gallons}`);

    // convert the total
    getTotals(cadBox.value, litersBox.value, usdBox.value, gallons)
});

function convertVolume(liters) {
    let gallons = Math.round((liters / 3.78541) * 100) / 100;
    return gallons;
}