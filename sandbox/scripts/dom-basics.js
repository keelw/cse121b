const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Sample image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);

const section = document.createElement('section');
const h3 = document.createElement('h3');
h3.textContent = 'Relief Society';
document.section.appendChild(h3);
document.body.appendChild(section);
section.innerHTML = `<h3>${h3}</h3>`;
section.innerHTML = "<h3>Relief Society</h3>";