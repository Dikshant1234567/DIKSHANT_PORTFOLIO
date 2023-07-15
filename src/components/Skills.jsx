import "../styles/skills.css";

function Skills() {
  return (
    <section id="skills">
      <div className="skill-box">
        <h1
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-easing="ease-in"
        >
          Skills
        </h1>
        <div className="list">
          <div>
            <h3>Frontend </h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li> HTML and CSS</li>
            </ul>
          </div>
          <div>
            <h3>Backend </h3>
            <ul>
              <li>Express [Node Js]</li>
              <li>MongoDB [Mongoose]</li>
              <li> Postgress</li>
            </ul>
          </div>
          <div>
            <h3>Primary Tools </h3>
            <ul>
              <li>Text Editor: VSCode</li>
              <li> GitHub</li>
              <li> Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
