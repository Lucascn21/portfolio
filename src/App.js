import { createRef, useEffect, useState } from "react";
import "./App.css";
import giphy from "./assets/gifs/giphy.gif";
import { ProjectCard } from "./components/ProjectCard";
import { TypewriterLine } from "./components/TypewriterLine";
import { Modal } from "./components/Modal";
import {
  Projects,
  techButtons,
  coursesButton,
  projectsButton,
} from "./data/data";

function App() {
  const landingRef = createRef();
  const projectsRef = createRef();
  const skillsSectionRef = createRef();
  const aboutRef = createRef();

  const yearInMs = 3.15576e10; // Using a year of 365.25 days (because leap years)
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / yearInMs);

  const [currentSection, setCurrentSection] = useState("landing");
  const [selectedTechArray, setSelectedTechArray] = useState([]);

  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [modalData, setModalData] = useState();

  const addOrRemoveTech = (selectedTech) => {
    if (selectedTechArray.includes(selectedTech)) {
      const techInArray =
        selectedTechArray[selectedTechArray.indexOf(selectedTech)];
      let filteredTechArray = selectedTechArray.filter((element) => {
        return element !== techInArray;
      });
      setSelectedTechArray(filteredTechArray);
    } else {
      let tempTechArray = [...selectedTechArray];
      tempTechArray.push(selectedTech);
      setSelectedTechArray(tempTechArray);
    }
  };

  const handleModal = () => {
    setModalIsOpened(!modalIsOpened);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setCurrentSection(entry.target.id);
        });
      },
      { threshold: [0.45, 0.85, 0.95, 0.45] }
    );
    observer.observe(landingRef?.current);
    observer.observe(projectsRef?.current);
    observer.observe(skillsSectionRef?.current);
    observer.observe(aboutRef?.current);
  }, []);

  return (
    <>
      {modalIsOpened && (
        <Modal modalData={modalData} handleModal={handleModal} />
      )}
      <aside id="asideRight">
        <div id="verticalBar"></div>
        <a
          className={currentSection === "landing" ? "highlighted" : null}
          href="#landing"
        >
          Landing
        </a>
        <a
          className={currentSection === "projects" ? "highlighted" : null}
          href="#projects"
        >
          Projects
        </a>
        <a
          className={currentSection === "skillsSection" ? "highlighted" : null}
          href="#skillsSection"
        >
          Skills
        </a>
        <a
          className={currentSection === "about" ? "highlighted" : null}
          href="#about"
        >
          About
        </a>
      </aside>
      <aside id="asideLeft">
        <a href="mailto:lucascn21@gmail.com" target="_blank" rel="noreferrer">
          <svg x="0px" y="0px" viewBox="0 0 230.17 230.17" fill="white">
            <g>
              <path d="M230,49.585c0-0.263,0.181-0.519,0.169-0.779l-70.24,67.68l70.156,65.518c0.041-0.468-0.085-0.94-0.085-1.418V49.585z"></path>
              <path d="M149.207,126.901l-28.674,27.588c-1.451,1.396-3.325,2.096-5.2,2.096c-1.836,0-3.672-0.67-5.113-2.013l-28.596-26.647 L11.01,195.989c1.717,0.617,3.56,1.096,5.49,1.096h197.667c2.866,0,5.554-0.873,7.891-2.175L149.207,126.901z"></path>
              <path d="M115.251,138.757L222.447,35.496c-2.427-1.443-5.252-2.411-8.28-2.411H16.5c-3.943,0-7.556,1.531-10.37,3.866 L115.251,138.757z"></path>
              <path d="M0,52.1v128.484c0,1.475,0.339,2.897,0.707,4.256l69.738-67.156L0,52.1z"></path>
            </g>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/Lucas-Goldental"
          rel="noreferrer"
        >
          <svg x="0px" y="0px" viewBox="0 0 512 512" fill="white">
            <g>
              <g>
                <rect y="160" width="114.496" height="352"></rect>
              </g>
            </g>
            <g>
              <g>
                <path d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896 c-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320 c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z"></path>
              </g>
            </g>
            <g>
              <g>
                <circle cx="56" cy="56" r="56"></circle>
              </g>
            </g>
          </svg>
        </a>
        <a href="https://github.com/lucascn21" target="_blank" rel="noreferrer">
          <svg x="0px" y="0px" viewBox="0 0 512 512" fill="white">
            <g>
              <g>
                <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872 c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464 c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496 c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368 c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68 c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672 c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992 c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496 c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"></path>
              </g>
            </g>
          </svg>
        </a>
      </aside>
      <main>
        <section ref={landingRef} id="landing">
          <article id="landingTextArea">
            <h1>Lucas Goldental</h1>
            <p className="italic">
              Student Dev
              <span>&nbsp;Problem Solver</span>
            </p>
            <div id="descriptionLanding">
              A&nbsp;
              <span id="landingAsideText">
                <TypewriterLine />
              </span>
              &nbsp;from Argentina.
              <br />I am&nbsp;
              {getAge("1992-08-02")} years old.
              <span>&nbsp; According to some function in the app</span>
              <br />
              I am currently diving into coding. I have also dabbled in Game
              Development and Human Resources.
              <br />
              My goal and focus is becoming a Javascript Developer.
            </div>
          </article>
          <article id="gifArea">
            <img src={giphy} alt="loading..." />
          </article>
        </section>
        <section ref={projectsRef} id="projects">
          <h1>Selected Projects</h1>
          {Projects.map((data, index) => {
            return (
              <ProjectCard
                key={index + 1}
                projectId={index + 1}
                projectData={data}
              >
                {index + 1}
              </ProjectCard>
            );
          })}
        </section>
        <section ref={skillsSectionRef} id="skillsSection">
          <article id="skills">
            <h4>Languages</h4>
            {techButtons("Lang", addOrRemoveTech, selectedTechArray)}
            <h4>Frameworks &amp; Libraries</h4>
            {techButtons("Lib", addOrRemoveTech, selectedTechArray)}
            <h4>Cloud</h4>
            {techButtons("Cloud", addOrRemoveTech, selectedTechArray)}
            <h4>Principles</h4>
            {techButtons("Principles", addOrRemoveTech, selectedTechArray)}
            <h4>Web Dev</h4>
            {techButtons("WebDev", addOrRemoveTech, selectedTechArray)}
            <h4>DBMS</h4>
            {techButtons("DBMS", addOrRemoveTech, selectedTechArray)}
            <h4>ORM</h4>
            {techButtons("ORM", addOrRemoveTech, selectedTechArray)}
            <h4>Project Management</h4>
            {techButtons(
              "Project Management",
              addOrRemoveTech,
              selectedTechArray
            )}
          </article>
          <article id="coursesAndProjects">
            <h4>Courses</h4>
            {coursesButton(
              "Course 1",
              selectedTechArray,
              handleModal,
              setModalData
            )}
            {coursesButton(
              "Course 2",
              selectedTechArray,
              handleModal,
              setModalData
            )}
            {coursesButton(
              "Course 3",
              selectedTechArray,
              handleModal,
              setModalData
            )}
            <h4>Projects</h4>
            {projectsButton(
              "Another BookStore Ecommerce",
              selectedTechArray,
              handleModal,
              setModalData
            )}
            {projectsButton(
              "Alkemy Challenge",
              selectedTechArray,
              handleModal,
              setModalData
            )}
          </article>
        </section>
        <section ref={aboutRef} id="about">
          <h2>About me</h2>
          <h3> Childhood</h3>
          <p>
            I was born on August, 1992. i've learned to read quite early, both
            english and spanish and i've been around computers most of my life.
            My dad was my main influence, i used to sit next to him sometimes
            while he worked and i picked up some basics, he also used to teach
            or explain anything i asked. That was me, learning computer basics
            and english along the way, by means of games, programs and my dad.
          </p>
          <h3>Adolescence</h3>
          <p>
            This is when i first approached to coding
            <span className="italic">(C++ & SQL)</span>, while learning how to
            use game server frameworks. I've also taken a deeper interest in
            hardware and eventually built my first custom pc.
          </p>
          <h3>Adulthood</h3>
          <p>
            <span className="italic">
              This is where i realized and decided that i am going to be a
              developer.&nbsp;
            </span>
            I got a part-time position into the Human Resources department, as a
            Consultant. I took part in modernizing the department's practices.
            Albeit against some resistance to change.
            <br />
            &nbsp;Not losing in sight that this is a job i like and do well but
            its not a job for me to build my carreer on, i've been focusing and
            investing in this one definitive goal that is becoming a developer.
          </p>
          <h4>To summarize who i am and what have i achieved recently:</h4>
          <span className="bolder">
            <p>
              I am constantly learning and currently pursuing an IT Degree.
              <br />
              I know many languages and technologies. I am capable of picking up
              new ones.
              <br />
              I got the curiosity and resourcefulness that i believe are key
              towards learning and improvement.
              <br />
              I am currently learning React.
              <br />
              I have very good analytical abilites, i really enjoy solving
              problems and helping others.
              <br /> I want to be part in the creation of useful things.
            </p>
          </span>
        </section>
      </main>

      <footer>Lucas Goldental</footer>
    </>
  );
}

export default App;
