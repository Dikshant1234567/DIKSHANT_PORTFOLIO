import { useState } from "react";
import "../styles/home.css";
import Contact from "./Contact";
import { useTypewriter , Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter({
    words: ["A Web Developer", "A PROBLEM Solver"],
    loop: 0,
    cursor:true,
    cursorStyle:'_',
    delaySpeed:1000,
    typeSpeed:100
  });
  return (
    <section id="home">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <span>Hii! I Am</span>
        <br />
        Dikshant Naudiyal.
        <br />
        <span className="profession">{text}</span>
        <Cursor cursorStyle="_" cursorColor="#141c3a"/>
        <div className="buttongroup">
          <button href>
            <a href="#about">Explore</a>
          </button>
          <button>Resume</button>
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
        alt="img"
      />
      <nav className="contact">
        <Contact />
      </nav>
    </section>
  );
}

export default Home;
