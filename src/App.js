import "./App.css";
import giphy from "./assets/gifs/giphy.gif";
import { Button } from "./components/Button";
import { ProjectCard } from "./components/ProjectCard";
function App() {
  return (
    <>
      <main>
        <section id="landing">
          <article id="landingTextArea">
            <h1>Lucas Goldental</h1>
            <p>
              Student Dev
              <span>Problem Solver</span>
            </p>
            <p id="descriptionLanding">
              My name is Lucas, i am a
              <span id="landingAsideText">
                <span className="Typewriter__wrapper">
                  Selftaught C1 English User
                </span>
                <span className="Typewriter__cursor">|</span>
              </span>
              from Argentina. According to some function in scripts.js, i am
              <span id="landingAgeText"> 30</span> years old. I am currently
              diving into Coding. I have also dabbled in Game Development and
              Human Resources. My goal and focus is becoming a Javascript
              Developer.
            </p>
          </article>
          <article id="gifArea">
            <img src={giphy} alt="loading..." />
          </article>
        </section>
        <section id="projects">
          <h1>Selected Projects</h1>
          {/* Fine for mocking, remember to use a valid key and to use some kind of data structure*/}
          {[1, 2, 3, 4].map((value, index) => {
            return (
              <ProjectCard key={index + 1} projectId={index + 1}>
                {index + 1}
              </ProjectCard>
            );
          })}
        </section>
        <section id="skillsSection">
          <article id="skills">
            <h4>Languages</h4>
            <button>Javascript</button>
            <button>Java</button>
            <button>SQL</button>
            <button>C C++ C#</button>
            <h4>Frameworks &amp; Libraries</h4>
            <button>NodeJs</button>
            <button>Express</button>
            <button>Bootstrap</button>
            <button>Axios</button>
            <button>Handlebars</button>
            <h4>Cloud</h4>
            <button>MongoAtlas</button>
            <button>Netlify</button>
            <h4>Principles</h4>
            <button>PWA</button>
            <button>REST</button>
            <button>MVC</button>
            <button>OOP</button>
            <h4>Web Dev</h4>
            <button>CSS3</button>
            <button>HTML5</button>
            <button>FIGMA</button>
            <h4>DBMS</h4>
            <button>MongoDB</button>
            <button>MySQL</button>
            <h4>ORM</h4>
            <button>Sequelize</button>
            <h4>Project Management</h4>
            <button>Git</button>
            <button>GitHub</button>
            <button>Scrum</button>
            <button>Trello</button>
            <button>UML</button>
          </article>
          <article id="coursesAndProjects">
            <h4>Courses</h4>
            <button>CoderHouse</button>
            <Button></Button>
            <h4>Projects</h4>
            <button>AnotherBookStore</button>
          </article>
        </section>
        <section id="about">
          <article id="aboutMe">
            <h2>asdadasddsada</h2>
            <p>
              asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdaasdasdasdadssadadadsadasdsadsadsadsdasdasdasdasdasdasdasdasdasdaasdasdasdadssadadadsadasdsadsadsadsdasdasdasdasdasdasdasdasdasdaasdasdasdadssadadadsadasdsadsadsadsdasdasdasdasdaasdasdasdadssadadadsadasdsadsadsad
            </p>
          </article>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
