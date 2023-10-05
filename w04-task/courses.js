// courses.js
// this is the aCourse object, it will create the objects for both courses
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        }
    ],

    // this function will find the section given by the user, 
    // and increase the enrollment by 1
    enrollStudent: function (sectionNum) {
        // this will find the right section using findInxex
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            passSections(this.sections);
        }
    },
    // this function will find the section given by the user, 
    // and decrease the enrollment by 1
    dropStudent: function (sectionNum) {
        // now find the right section again using findIndex
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            passSections(this.sections);
        }
    },
  };

// this function simply sets the course info from the HTML document
function setInfo(course){
    const courseName = document.querySelector('#courseName');
    const courseCode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
}

// this function passes the information into the table in the html document
function passSections(sections) {
    toRender = document.querySelector("#sections");
    const html = sections.map (
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    toRender.innerHTML = html.join("");
}

// Create event listeners for the enroll and drop buttons
document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
})
document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
})

// call these functions first to get the info into variables from the html document
setInfo(aCourse);
passSections(aCourse.sections);

