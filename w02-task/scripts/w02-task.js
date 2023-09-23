/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "William Keel";

let date = new Date();
let currentYear = date.getFullYear();

let profilePicture = document.querySelector("img");
profilePicture.setAttribute("src", "images/me.jpg");
profilePicture.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector("#year");
let imageElement = document.querySelector('picture');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
document.querySelector("#year").textContent = currentYear;
imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */
let foodArray = ["Curry and rice", "Enchiladas", "Beans", "Cheddar Broccoli Rica-a-Roni"];

foodElement.textContent = foodArray;

let foodItem = "Spam Sandwhich";
foodArray.push(foodItem)

foodElement.innerHTML += `<br><br>${foodArray}`;

foodArray.shift();
foodElement.innerHTML += `<br><br>${foodArray}`;

foodArray.pop();
foodElement.innerHTML += `<br><br>${foodArray}`;
