import React from "react";
import "../styles/about.css";

function About() {
  return (
    <section id="about">
      <div className="devInfo">
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          About
        </h1>
        <p
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Hi!, I am Dikshant, and currently student of BSc 2nd year at Shri Dev
          Suman University.
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          I am a self taught Developer.
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          I enjoy building websites and exploring new technologies.
        </p>
        <p
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <b>
            Let's Start a Conversation:
            <br />
            <a href="mailto:dikshantnaudiyal06@gmail.com?subject=Hi">
              dikshantnaudiyal06@gmail.com
            </a>
          </b>
        </p>
        <button
          data-aos="fade-up-left"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          Resume
        </button>
      </div>
    </section>
  );
}

export default About;
