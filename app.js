const filterInput = document.getElementById("filterInput");
const filterButton = document.getElementById("filterButton");
const projectList = document.getElementById("projectList");

filterButton.addEventListener("click", () => {
  const filterValue = filterInput.value.toUpperCase();
  const projects = projectList.querySelectorAll(".project");

  projects.forEach((project) => {
    const technology = project.querySelector("p").textContent.toUpperCase();
    if (technology.indexOf(filterValue) > -1) {
      project.style.display = "";
    } else {
      project.style.display = "none";
    }
  });
});



// // Education Page

// const educationList = document.getElementById("educationList");
// const courses = [  {    courseName: "Mathematics",    institution: "ABC High School",    year: "2010-2012",  },  {    courseName: "Science",    institution: "ABC High School",    year: "2010-2012",  },  {    courseName: "English",    institution: "ABC High School",    year: "2010-2012",  },  {    courseName: "Computer Science",    institution: "XYZ University",    year: "2012-2016",  },  {    courseName: "Data Structures and Algorithms",    institution: "XYZ University",    year: "2012-2016",  },  {    courseName: "Software Engineering",    institution: "XYZ University",    year: "2012-2016",  },];

// // Loop through courses and create list items
// for (let i = 0; i < courses.length; i++) {
//   const course = courses[i];
//   const li = document.createElement("li");
//   const text = document.createTextNode(
//     course.courseName +
//       " - " +
//       course.institution +
//       " (" +
//       course.year +
//       ")"
//   );
//   li.appendChild(text);
//   educationList.appendChild(li);
// }
