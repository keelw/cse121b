let countries = [];
const cadBox = document.querySelector("#cad");
const usdBox = document.querySelector("#usd");
const usdTotal = document.querySelector("#totalUSD");
const cadTotal = document.querySelector("#totalCAD"); 
let usd;

/* async getTemples Function using fetch()*/
async function getConversion(cad) {
    const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad.json";
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        let rate = convertData(data);
        calculate(rate, cad);
    }
}

function convertData(data) {
    for (let country in data.cad) {
        countries.push(data.cad[country]);
    }

    //required array function here****
    let rate = countries.at(474);
    return rate;
}

function calculate(rate, cad) {
    usd = Math.round((cad * rate * 3.78541) * 100) / 100;
    usdBox.setAttribute("value", `${usd}`);
}

function getTotals(cad, liters, gallons) {
    let totalCAD = Math.round((cad * liters) * 100) / 100;
    cadTotal.setAttribute("value", `${totalCAD}`);

    let totalUSD = Math.round((usd * gallons) * 100) / 100;
    usdTotal.setAttribute("value", `${totalUSD}`);
}

export {getConversion, getTotals};