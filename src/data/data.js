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
        gradient={0}
        onClick={(e) => {
          e.target.className
            ? (e.target.className = "")
            : (e.target.className = "success");

          addOrRemoveTech(filteredTech.Name);
        }}
        isInProgress={techType == "In Progress"}
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
    ID: 0,
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
      "Git",
    ],
    Reason: "My Final Project for CoderHouse's React Course",
    Things: {
      Learned: ["Developing a React App from scratch.", "Routing."],
      ToImprove: [
        "Better layout and responsive practices with grid.",
        "Project folder structuring.",
      ],
      ToDo: [
        "Remake with a better overall theme specification design system and ideas.",
      ],
    },
    TakeAway: [
      "I remade a nodeJs portfolio in react.",
      "My code improved vastly.",
      "I better understand the pros and cons of React and responsiveness.",
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
    ID: 1,
    Name: "Alkemy Challenge",
    Tech: ["Js", "HTML", "CSS", "React", "Vercel", "Tailwind", "Axios", "Git"],
    Reason: "Alkemy's Challenge Project",
    Things: {
      Learned: [
        "How tailwind works.",
        "Local/Session storage.",
        "Token Auth and Redirection.",
      ],
      ToImprove: ["The barebones frontend.", "Project folder structuring."],
      ToDo: ["A contact Form like the one i did in other courses and projects"],
    },
    TakeAway: [
      "I took this challenge as further React learning and practice.",
      "Gained and understanding of token auth, route protecting and redirecting.",
      "Used Axios to fetch data.",
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
    ID: 2,
    Name: "Tic Tac Toe",
    Tech: ["Js", "HTML", "CSS", "React", "Git"],
    Reason: "A guided project from React's documentation.",
    Things: {
      Learned: [
        "Honed the fundamentals of React: Components, Props, and State.",
        "The most common techniques in React development.",
        "Important React and Js features such as State, Map, Conditional Rendering and Modern Js.",
      ],
      ToImprove: [
        "As a project to show, the UI/UX is awful, but this is meant as a project to focus on the code.",
      ],
      ToDo: ["Remake with a proper user experience."],
    },
    TakeAway: [
      "I followed the React's documentation tutorial in a focused effort of gaining familiarity and insights in the proper way of coding React Components.",
      "This is a good starting point to look back to for some basic code examples.",
      "It was good and to-the-point practice.",
    ],
    Links: {
      Vercel: "https://react-dev-tuto.vercel.app",
      ReactDoc: "https://react.dev/learn/tutorial-tic-tac-toe#",
    },
    MainLink: function () {
      return this.Links.Vercel;
    },
  },
  {
    ID: 3,
    Name: "This Portfolio",
    Tech: ["Js", "HTML", "CSS", "React", "Git"],
    Reason: "My Portfolio Presentation.",
    Things: {
      Learned: [
        "I need to add some backend projects to my portfolio.",
        "The most common techniques in React development.",
        "Important React and Js features such as State, Map, Conditional Rendering and Modern Js.",
      ],
      ToImprove: [
        "The order in which i started coding my Ux wasnt the best, but thats know-how that comes with practice.",
        "Basically, my frontend skillset, from UX/UI, responsiveness, to modern-simpler CSS.",
      ],
      ToDo: [
        "Make a carousel for the projects section.",
        "Add some of the features that the old project has and this one doesnt, like project/course highlight on hover.",
        "Eventually a better portfolio with everything i've learned designing and developing this app.",
      ],
    },
    TakeAway: [
      "This is a remake of an old portfolio which was a Server-Rendered NodeJs App.",
      "I needed a better way to show my projects, skillset and a little bit of who i am.",
      "The projects and courses data is exported from a file, which makes it easier to edit and mantain, as i learned quite a bit, i will structure my data way better from now on.",
      "As soon as i felt comfortable with React, i made this project as the first big step in the search of my dream job.",
    ],
    MainLink: function () {
      return undefined;
    },
    projectModalToggle: () =>
      [...document.querySelectorAll("button")]
        .find((btn) => btn.textContent.includes(Projects[3].Name))
        .click(),
  },
];

export const Courses = [
  {
    ID: 1,
    Name: "React Js - Coderhouse",
    Institution: "Coderhouse",
    Tech: ["Js", "HTML", "CSS", "React", "Vercel", "Firebase", "Git"],
    Things: {
      Learned: [
        "Basic to intermediate React.",
        "How to use Firebase.",
        "How to deploy to Vercel.",
      ],
      Achieved: ["A deployed project in Vercel.", "Top 10% of the class."],
      ToDo: ["Keep learning and improving."],
    },
    TakeAway: [
      "I took this course after realizing it would be best to have some guidance on my first steps with React.",
      "React is very javascript-driven, its approach makes a lot of sense to me.",
      "React was important for me because it combines the good of server-side rendering without its downsides.",
      <p>
        I am now comfortable{" "}
        <a
          target="_blank"
          href="https://react.dev/learn/thinking-in-react"
          rel="noreferrer"
        >
          Thinking in React.
        </a>
      </p>,
    ],
  },
  {
    ID: 2,
    Name: "NodeJs - ComIT",
    Institution: "ComunidadIT",
    Tech: [
      "Js",
      "HTML",
      "CSS",
      "NodeJs",
      "Axios",
      "Bootstrap",
      "MongoDB",
      "Mongo Atlas",
      "ExpressJs",
      "Handlebars",
      "Ejs",
      "Sass",
      "Git",
    ],
    Things: {
      Learned: [
        "Basic Javascript.",
        "Basic to intermediate NodeJs.",
        "Basic Web Development.",
        "Server-side rendering.",
      ],
      Achieved: [
        "A Fullstack Project.",
        "An understanding of what frontend and backend actually mean.",
      ],
      ToDo: [
        "Remake with a much improved React frontend.",
        "Cleaner code in every aspect.",
        "A more cloud-deploy-friendly project structure.",
      ],
    },
    TakeAway: [
      "This was my first formal course with Javascript, Web Development and NodeJs.",
      "This is where i decided to become a Fullstack Developer, with Js as my main language.",
      "Here i discovered Web Development and Js, the backend in particular.",
      "There are two versions of this project, a pretty basic one, and a more complex one (MVC, Ejs, Session, local/cloud storage, user functionalities, and more).",
    ],
    Links: {
      "Github v1": "https://github.com/Lucascn21/Tyranido",
      "Github v2": "https://github.com/Lucascn21/Tyranido2",
    },
  },
  {
    ID: 3,
    Name: "Scrum - ComIt",
    Institution: "ComunidadIT - Grupo Humannova",
    Tech: ["Scrum", "Agile Methodologies", "Trello"],
    Things: {
      Learned: ["What is Scrum.", "Importance and benefits of Scrum."],
      Achieved: [
        "An understanding of what Agile Methodologies, Scrum in particular.",
        "A very fruitful workshop.",
      ],
      ToDo: ["Keep studying Agile Methodologies, they are great."],
    },
    TakeAway: [
      "This was my first approach to modern, flexible and responsible methodologies, it left quite an impression in me.",
      "This experience changed my perspective on how to organize and work.",
    ],
  },
  {
    ID: 4,
    Name: "Miriadax",
    Institution: "Telefónica",
    Tech: [
      "Js",
      "HTML",
      "CSS",
      "NodeJs",
      "Axios",
      "Express",
      "PWA",
      "MVC",
      "Ejs",
      "Sequelize",
      "SQL",
      "Netlify",
      "Git",
    ],
    Things: {
      Learned: [
        "Intermediate Javascript.",
        "Intermediate NodeJs.",
        "Git.",
        "An understanding of PWA's.",
        "MVC pattern in ExpressJs.",
        "Seeding and Migrating DB's.",
      ],
      Achieved: [
        "Deeper understanding of Js Fullstack Development.",
        "Successfully completed a set of courses from basic Web Dev and Git to intermediate Js Fullstack Development.",
      ],
      ToDo: ["Develop a PWA."],
    },
    TakeAway: [
      "I grew very comfortable to Js and NodeJs thanks to this course.",
      "This was my first MOOC, it was challenging, rewarding and very enjoyable.",
    ],
    Links: {
      Miriadax: "https://miriadax.net/curso/itinerario-fullstack/",
    },
  },
  {
    ID: 5,
    Name: "Web Dev - Fundación Carlos Slim",
    Institution: "Fundación Carlos Slim",
    Tech: ["Js", "HTML", "CSS", "MVC", "Git"],
    Things: {
      Learned: [
        "Basic Frontend and Backend concepts",
        "Basic Web Development.",
        "Basic Cookies Management.",
        "Basic Session Management.",
        "MVC pattern",
      ],
      Achieved: [
        "Successfully completed a set of Frontend and Backend courses.",
      ],
      ToDo: [
        "Keep doing courses, completing learning paths, in order to earn at least one diploma.",
      ],
    },
    TakeAway: [
      "I adquired and strengthened my grip on what Web Development is.",
      "This is one of my day-to-day course platforms to keep a constant learning and interest.",
      "This site is a very underrated resource that started very simple and basic, nowadays it has mildly advanced courses and an extensive catalogue",
    ],
    Links: {
      Site: "https://capacitateparaelempleo.org",
      "Diploma to Achieve":
        "https://capacitateparaelempleo.org/interna-diplomado/26",
    },
  },
  {
    ID: 6,
    Name: "Java - Codo A Codo",
    Institution: "GCBA",
    Tech: ["Java", "OOP", "SQL", "MySQL"],
    Things: {
      Learned: [
        "Basic Programming knowledge and concepts.",
        "Basic Java.",
        "Basic SQL.",
      ],
      Achieved: [
        "Successfully completed the course.",
        "Earned a certificate by the INET.",
        "Developed a Calculator and a CRUD api.",
      ],
      ToDo: [
        "Keep doing courses, completing learning paths, in order to earn at least one diploma.",
      ],
    },
    TakeAway: [
      "This was my first and formal attempt to learn how to code.",
      "We went from pseudocode and algorithms, all the way up to Java and SQL.",
    ],
    Links: {
      Site: "https://agenciadeaprendizaje.bue.edu.ar/codo-a-codo/",
    },
  },
];

export const Technologies = [
  //Langs
  { Name: "Js", Type: "Lang" },
  { Name: "SQL", Type: "Lang" },
  { Name: "Java", Type: "Lang" },
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
    Name: "Scrum",
    Type: "Project Management",
  },
  {
    Name: "Trello",
    Type: "Project Management",
  },
  { Name: "Agile Methodologies", Type: "Project Management" },
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
  //In Progress
  {
    Name: "REST",
    Type: "In Progress",
  },
  {
    Name: "Figma",
    Type: "In Progress",
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
