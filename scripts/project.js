// import functions from the module
import {getConversion, getTotals} from "./currency.js";

// global variables 
let cadBox = document.querySelector("#cad");
let usdBox = document.querySelector("#usd");
let litersBox = document.querySelector("#liters");
let gallonsBox = document.querySelector("#gallons");
const button = document.querySelector("#compute");
const buttonSection = document.querySelector(".button");

// listen to the button
button.addEventListener("click", () => {
    cad = cadBox.value;
    usd = usdBox.value;
    liters = litersBox.value;
    // convert and display the currency when the user hits the button
    getConversion(cad);
    
    // convert and display the volume when the user hits the button
    let gallons = convertVolume(liters);
    gallonsBox.setAttribute("value", `${gallons}`);

    // convert the total
    getTotals(cad, liters, gallons)

    // check to see if the user is entering viable numbers for the scenario
    if (cad > 2.5 || liters > 250) {
        // prompt them to check their numbers if needed
        const warning = document.createElement("label");
        warning.textContent = "WOAH there hoss... better double check those numbers!";
        warning.setAttribute("id", "warning");
        buttonSection.appendChild(warning);
    }
});

// perform the volume calculations
function convertVolume(liters) {
    let gallons = Math.round((liters / 3.78541) * 100) / 100;
    return gallons;
}