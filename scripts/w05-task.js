/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temples) => {
        let html = document.createElement("article");
        let header = document.createElement("h3");
        header.innerHTML = `${temples.templeName}`
        let img = document.createElement("img");
        img.src = temples.imageUrl;
        img.alt = temples.location;

        html.appendChild(header);
        html.appendChild(img);

        templesElement.appendChild(html);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        templeList = data;
    }

    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
   templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = function (temples) {
    reset();
    const option = document.querySelector("#sortBy");
    const filter = option.options[option.selectedIndex].value;

    switch(filter) {
        case "utah":
            let utahFilteredTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahFilteredTemples);
            break;
        
        case "notutah":
            let notUtahFilteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notUtahFilteredTemples);
            break;

        case "older":
            date1 = new Date(1950, 0, 1);
            oldDate = date1.getTime();
            let oldFilderedTemples = [];
            for (let i=0; i<temples.length; i++) {
                let year = temples[i].dedicated.split(",",1)[0];
                if (year <= 1950) {
                    oldFilderedTemples = [...oldFilderedTemples, temples[i]];
                }
            }
            displayTemples(oldFilderedTemples);
            break;

        case "all":
            getTemples(temples);
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList)
});

getTemples();
