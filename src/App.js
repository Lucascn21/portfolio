import "./App.css";

function App() {
  return (
    <>
      <aside>
        <nav>
          <a href="#landing">Landing</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </aside>
      <main>
        <section id="landing">
          <iframe
            title="test"
            src="https://giphy.com/embed/XEyg6fn0RAYH76efh7"
            className="giphy-embed"
            allowFullScreen
          ></iframe>

          <h1>Lucas Goldental</h1>
          <p>
            Student Dev <span>Problem Solver</span>
          </p>
          <p id="descriptionLanding">
            My name is Lucas, i am a<span id="landingAsideText"></span> from
            Argentina.
            <br />
            According to some function in scripts.js, i am
            <span id="landingAgeText"></span> years old. I am currently diving
            into Coding. I have also dabbled in Game Development and Human
            Resources. My goal and focus is becoming a Javascript Developer.
          </p>
        </section>
        <section id="projects">projects</section>
        <section id="skills">skills</section>
        <section id="contact">contact</section>
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
