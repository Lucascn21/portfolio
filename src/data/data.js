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
export const coursesButton = (
  courseName,
  selectedTechArray,
  handleModal,
  setModalData
) => {
  return Courses.filter((course) => {
    return course.Name === courseName;
  }).map((filteredCourse) => {
    return (
      <Button
        key={`${filteredCourse.Name}-${filteredCourse.Institution}`}
        text={filteredCourse.Name}
        gradient={determineGradient(selectedTechArray, filteredCourse.Tech)}
        onClick={() => {
          handleModal();
          setModalData(filteredCourse);
        }}
      />
    );
  });
};

//Function that returns an array of buttons matching que type parameter
export const projectsButton = (
  projectName,
  selectedTechArray,
  handleModal,
  setModalData
) => {
  return Projects.filter((project) => {
    return project.Name === projectName;
  }).map((filteredProject) => {
    return (
      <Button
        key={`${filteredProject.Name}-${filteredProject.Reason}`}
        text={filteredProject.Name}
        gradient={determineGradient(selectedTechArray, filteredProject.Tech)}
        onClick={() => {
          handleModal();
          setModalData(filteredProject);
        }}
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
    Reason: "Final project of the CoderHouse React course",
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
    TakeAway: [
      "I remade a nodeJs portfolio in react",
      "My code improved vastly",
      "I better understand the pros and cons of React and responsiveness",
    ],
    Links: {
      Github: "https://github.com/Lucascn21/ProyectoFinal-LGM-CODER",
      Vercel: "https://proyecto-final-lgm-coder.vercel.app",
    },
    MainLink: function () {
      return this.Links.Vercel;
    },
  },
  {
    Name: "Alkemy Challenge",
    Tech: ["Js", "HTML", "CSS", "React", "Vercel", "Tailwind", "Axios"],
    Reason: "Alkemy's Challenge project",
    Things: {
      Learned: [
        "How tailwind works",
        "Local/Session storage",
        "Token Auth and Redirection",
      ],
      ToImprove: [
        "Better layout and responsive practices with grid 2",
        "Project folder structuring 2",
      ],
      ToDo: ["A contact Form like the one i did in other courses and projects"],
    },
    TakeAway: [
      "I took this challenge as further React learning and practice ",
      "Gained and understanding of token auth, route protecting and redirecting",
      "Used Axios to fetch data",
    ],
    Links: {
      Github: "https://github.com/Lucascn21/alkemy-thing",
      Vercel: "https://alkemy-thing.vercel.app",
    },
    MainLink: function () {
      return this.Links.Vercel;
    },
  },
  {
    Name: "Project 3",
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
    TakeAway: [
      "I remade a nodeJs portfolio in react",
      "My code improved vastly",
      "I better understand the pros and cons of React and responsiveness",
    ],
    Links: {
      Github: "https://github.com/link2",
      Vercel: "https://vercel.com/link2",
      Glitch: "https://glitch.com/link2",
    },
    MainLink: function () {
      return this.Links.Glitch;
    },
  },
  {
    Name: "Project 4",
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
    TakeAway: [
      "I remade a nodeJs portfolio in react",
      "My code improved vastly",
      "I better understand the pros and cons of React and responsiveness",
    ],
    Links: {
      Github: "https://github.com/link2",
      Vercel: "https://vercel.com/link2",
      Glitch: "https://glitch.com/link2",
    },
    MainLink: function () {
      return this.Links.Github;
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
    TakeAway: ["better this 3", "how to that 3", "the reason for 3"],
  },
  {
    ID: 2,
    Name: "Course 2",
    Institution: "codecademy 2",
    Tech: ["Js", "HTML", "CSS", "Figma"],
    Things: {
      Learned: ["better this 2", "how to that 2", "the reason for 2"],
      Achieved: ["coding knowledge 2", "a project to show 2"],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas 2",
      ],
    },
    TakeAway: ["better this 3", "how to that 3", "the reason for 3"],
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
    TakeAway: ["better this 3", "how to that 3", "the reason for 3"],
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
