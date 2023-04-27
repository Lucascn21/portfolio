import { Button } from "../components/Button";
//Function that returns an array of buttons matching que type parameter
export const techButtons = (techType, addOrRemoveTech) => {
  return Technologies.filter((tech) => {
    return tech.Type === techType;
  }).map((filteredTech) => {
    return (
      <Button
        key={`${filteredTech.Name}-${filteredTech.Type}`}
        text={filteredTech.Name}
        onClick={(e) => {
          e.target.className
            ? (e.target.className = "")
            : (e.target.className = "success");

          addOrRemoveTech(filteredTech.Name);
        }}
      />
    );
  });
};

//Function that returns an array of buttons matching que type parameter
export const coursesButton = (courseName, selectedTechArray) => {
  return Courses.filter((course) => {
    return course.Name === courseName;
  }).map((filteredCourse) => {
    return (
      <Button
        key={`${filteredCourse.Name}-${filteredCourse.Institution}`}
        text={filteredCourse.Name}
        gradient={determineGradient(selectedTechArray, filteredCourse.Tech)}
      />
    );
  });
};

//Function that returns an array of buttons matching que type parameter
export const projectsButton = (projectName, selectedTechArray) => {
  return Projects.filter((project) => {
    return project.Name === projectName;
  }).map((filteredProject) => {
    return (
      <Button
        key={`${filteredProject.Name}-${filteredProject.reason}`}
        text={filteredProject.Name}
        gradient={determineGradient(selectedTechArray, filteredProject.Tech)}
      />
    );
  });
};

export const Projects = [
  {
    Name: "Project 1",
    Tech: ["Js", "HTML", "CSS", "FIGMA", "C, C#, C++"],
    Reason: "A reason",
    Things: {
      Learned: ["better this", "how to that", "the reason for"],
      ToImprove: [
        "Better layout and responsive practices with grid",
        "Project folder structuring",
      ],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas",
      ],
    },
    Takeaway:
      "I remade a nodeJs portfolio in react, my code improved vastly, i better understand the pros and cons of React and responsiveness. ",
    Links: {
      Github: "https://github.com/link",
      Vercel: "https://vercel.com/link",
      Glitch: "https://glitch.com/link",
    },
  },
  {
    tech: ["Js", "HTML", "CSS"],
    reason: "A reason 2",
    things: {
      learned: ["better this 2", "how to that 2", "the reason for 2"],
      toImprove: [
        "Better layout and responsive practices with grid 2",
        "Project folder structuring 2",
      ],
      toDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    takeAway:
      "I remade a nodeJs portfolio in react, my code improved vastly, i better understand the pros and cons of React and responsiveness. 2",
    Links: {
      Github: "https://github.com/link2",
      Vercel: "https://vercel.com/link2",
      Glitch: "https://glitch.com/link2",
    },
  },
];

export const Courses = [
  {
    ID: 1,
    Name: "Course 1",
    Institution: "Coderhouse",
    Tech: ["Js", "HTML", "CSS"],
    Things: {
      Learned: ["better this", "how to that", "the reason for"],
      Achieved: ["coding knowledge", "a project to show"],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas",
      ],
    },
    TakeAway: "I learned how to code ",
  },
  {
    ID: 2,
    name: "course 2",
    institution: "codecademy 2",
    tech: ["Js", "HTML", "CSS"],
    things: {
      learned: ["better this 2", "how to that 2", "the reason for 2"],
      achieved: ["coding knowledge 2", "a project to show 2"],
      toDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    takeAway: "I learned how to code 2",
  },
  {
    ID: 3,
    name: "course 3",
    institution: "codecademy 3",
    tech: ["Js", "HTML", "CSS"],
    things: {
      learned: ["better this 3", "how to that 3", "the reason for 3"],
      achieved: ["coding knowledge 3", "a project to show 3"],
      toDo: [
        "Remake with a better overall theme specification design system and ideas 3",
      ],
    },
    takeAway: "I learned how to code 2",
  },
];

export const Technologies = [
  //Langs
  { Name: "Js", Type: "Lang" },
  { Name: "SQL", Type: "Lang" },
  { Name: "Java", Type: "Lang" },
  { Name: "C, C#, C++", Type: "Lang" },
  //Node/Frameworks/Libs
  {
    Name: "NodeJs",
    Type: "Runtime Enviroment",
  },
  { Name: "React", Type: "Lib" },
  { Name: "Axios", Type: "Lib" },
  { Name: "Handlebars", Type: "Lib" },
  { Name: "Ejs", Type: "Lib" },
  {
    Name: "ExpressJs",
    Type: "Framework",
  },
  {
    Name: "Bootstrap",
    Type: "Lib",
  },
  {
    Name: "Tailwind",
    Type: "Lib",
  },
  {
    Name: "Semantic UI",
    Type: "Lib",
  },
  //Cloud
  {
    Name: "Vercel",
    Type: "Cloud",
  },
  {
    Name: "Mongo Atlas",
    Type: "Cloud",
  },
  {
    Name: "Netlify",
    Type: "Cloud",
  },
  //Principles
  {
    Name: "PWA",
    Type: "Principles",
  },
  {
    Name: "REST",
    Type: "Principles",
  },
  {
    Name: "MVC",
    Type: "Principles",
  },
  {
    Name: "OOP",
    Type: "Principles",
  },
  //WebDev
  {
    Name: "Figma",
    Type: "WebDev",
  },
  {
    Name: "CSS",
    Type: "WebDev",
  },
  {
    Name: "HTML",
    Type: "WebDev",
  },
  //Project Management
  {
    Name: "Git",
    Type: "Project Management",
  },
  {
    Name: "GitHub",
    Type: "Project Management",
  },
  {
    Name: "Scrum",
    Type: "Project Management",
  },
  {
    Name: "Trello",
    Type: "Project Management",
  },

  //DBMS
  {
    Name: "MongoDB",
    Type: "DBMS",
  },
  {
    Name: "MySQL",
    Type: "DBMS",
  },
  //ORM
  {
    Name: "Sequelize",
    Type: "ORM",
  },
];

const determineGradient = (selectedTechArray, courseTechArray) => {
  //  console.dir(Array.from(selectedTechSet));
  const containsAll = courseTechArray?.every((element) => {
    return selectedTechArray?.indexOf(element) !== -1;
  });

  if (containsAll) {
    // console.dir("100%");
    return 100;
  } else {
    let count = 0;
    for (const tech of selectedTechArray) {
      if (courseTechArray?.includes(tech)) count++;
    }
    //  console.dir(`${(count / courseTechArray?.length) * 100}%`);

    return (count / courseTechArray?.length) * 100;
  }
};
