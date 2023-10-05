/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let profile = {
    name: "William Keel",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Cheddar Broccoli Rica-a-roni",
        "Tuna and crackers",
        "Saag Paneer",
        "Chocolate chip cookies"
    ],
    hobbies: [
        "Building things",
        "Fishing",
        "Exploring",
        "Cars"
    ],
    placesLived: [],

}

/* Populate Profile Object with placesLive objects */
profile.placesLived.push(
    {
        place: "Herriman, UT",
        length: "17 years"
    },
    {
        place: "Panama City, Panama",
        length: "1 year"
    },
    {
        place: "Alabama/Florida, US",
        length: "1 year"
    },
    {
        place: "Herriman, UT",
        length: "3 years"
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = profile.name;

/* Photo with attributes */
document.querySelector('#photo').src = profile.photo;

/* Favorite Foods List*/
profile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
profile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
profile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
})

