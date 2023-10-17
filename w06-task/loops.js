// loops.js
myInfo = {
    name: "William Keel",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Fishing", "Camping", "Car stuff"],
    placesLived: [
      {
        place: "Herriman UT",
        length: "18 years",
      },
      {
        place: "Panama City, Panama",
        length: "2 years",
      },
      {
        place: "Herriman Utah",
        length: "3 years",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

  // .forEach
  const foodsElement = document.querySelector("#favorite-foods");
  function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement('li');
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
  }

  // .map
  function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
  }

  function mapFoodItemSmall(food) {
    return `<li>${food}</li>`;
  }

  const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
  foodsElement.innerHTML = foodListElements.join("");

  const placesElement = document.querySelector("#places-lived");

  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }

  function foodTemplate(food) {
    return `<li>${food}</li>`;
  }

  function placeTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }

  foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodTemplate);

  placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placeTemplate);