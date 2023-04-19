import "./App.css";
import giphy from "./assets/gifs/giphy.gif";
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
              from Argentina.
              <br />
              According to some function in scripts.js, i am
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
        <section id="skills">skills</section>
        <section id="contact">contact</section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
