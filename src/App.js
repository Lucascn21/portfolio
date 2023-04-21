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
            <p className="italic">
              Student Dev
              <span>&nbsp;Problem Solver</span>
            </p>
            <p id="descriptionLanding">
              A&nbsp;
              <span id="landingAsideText">
                <span className="Typewriter__wrapper">
                  Selftaught C1 English User
                </span>
                <span className="Typewriter__cursor">|</span>
              </span>
              &nbsp;from Argentina. According to some function the app, i am
              <span id="landingAgeText"> 30</span> years old.
              <br />
              I am currently diving into coding. I have also dabbled in Game
              Development and Human Resources.
              <br />
              My goal and focus is becoming a Javascript Developer.
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
            <h4>To summarize who i am and what have i achieved recently:</h4>
            <span className="bolder">
              <p>
                I am constantly learning and currently pursuing an IT Degree.
                <br />
                I know many languages and technologies. I am capable of picking
                up new ones.
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
          </p>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
