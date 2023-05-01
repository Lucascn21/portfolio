import { Button } from "../components/Button";
//Function that returns an array of buttons matching que type parameter
export const techButtons = (techType, addOrRemoveTech, selectedTechArray) => {
  return Technologies.filter((tech) => {
    return tech.Type === techType;
  }).map((filteredTech) => {
    return (
      <Button
        key={`${filteredTech.Name}-${filteredTech.Type}`}
        text={filteredTech.Name}
        gradient={determineGradient(selectedTechArray, [filteredTech.Name])}
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
        key={`${filteredProject.Name}-${filteredProject.Reason}`}
        text={filteredProject.Name}
        gradient={determineGradient(selectedTechArray, filteredProject.Tech)}
      />
    );
  });
};

export const Projects = [
  {
    Name: "Another BookStore Ecommerce",
    Tech: [
      "Js",
      "HTML",
      "CSS",
      "React",
      "Firebase",
      "Sass",
      "Mui",
      "Vercel",
      "SPA",
    ],
    Reason: "Final project of the CoderHouse React",
    Things: {
      Learned: [
        "Developing a React App from scratch",
        "Routing",
        "the reason for",
      ],
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
    Name: "Project 2",
    Tech: ["Js", "HTML", "CSS"],
    Reason: "A reason 2",
    Things: {
      Learned: ["better this 2", "how to that 2", "the reason for 2"],
      ToImprove: [
        "Better layout and responsive practices with grid 2",
        "Project folder structuring 2",
      ],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    TakeAway:
      "I remade a nodeJs portfolio in react, my code improved vastly, i better understand the pros and cons of React and responsiveness. 2",
    Links: {
      Github: "https://github.com/link2",
      Vercel: "https://vercel.com/link2",
      Glitch: "https://glitch.com/link2",
    },
  },
  {
    Name: "Project 2",
    Tech: ["Js", "HTML", "CSS"],
    Reason: "A reason 2",
    Things: {
      Learned: ["better this 2", "how to that 2", "the reason for 2"],
      ToImprove: [
        "Better layout and responsive practices with grid 2",
        "Project folder structuring 2",
      ],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    TakeAway:
      "I remade a nodeJs portfolio in react, my code improved vastly, i better understand the pros and cons of React and responsiveness. 2",
    Links: {
      Github: "https://github.com/link2",
      Vercel: "https://vercel.com/link2",
      Glitch: "https://glitch.com/link2",
    },
  },
  {
    Name: "Project 2",
    Tech: ["Js", "HTML", "CSS"],
    Reason: "A reason 2",
    Things: {
      Learned: ["better this 2", "how to that 2", "the reason for 2"],
      ToImprove: [
        "Better layout and responsive practices with grid 2",
        "Project folder structuring 2",
      ],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    TakeAway:
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
    Name: "Course 2",
    Institution: "codecademy 2",
    Tech: ["Js", "HTML", "CSS", "Figma"],
    Things: {
      learned: ["better this 2", "how to that 2", "the reason for 2"],
      achieved: ["coding knowledge 2", "a project to show 2"],
      toDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    TakeAway: "I learned how to code 2",
  },
  {
    ID: 3,
    Name: "Course 3",
    Institution: "codecademy 3",
    Tech: ["Js", "HTML", "CSS"],
    Things: {
      Learned: ["better this 3", "how to that 3", "the reason for 3"],
      Achieved: ["coding knowledge 3", "a project to show 3"],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas 3",
      ],
    },
    TakeAway: "I learned how to code 2",
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
    Name: "Mui",
    Type: "Lib",
  },
  //Cloud
  {
    Name: "Vercel",
    Type: "Cloud",
  },
  {
    Name: "Firebase",
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
  {
    Name: "SPA",
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
  {
    Name: "Sass",
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
  const containsAll = courseTechArray?.every((element) => {
    return selectedTechArray?.indexOf(element) !== -1;
  });

  if (containsAll) {
    return 100;
  } else {
    let count = 0;
    for (const tech of selectedTechArray) {
      if (courseTechArray?.includes(tech)) count++;
    }
    return (count / courseTechArray?.length) * 100;
  }
};
