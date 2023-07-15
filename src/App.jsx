import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";
import "./styles/responsive/moblie.css"
import "./styles/responsive/tablet.css"

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Education />
      <Footer />
    </>
  );
}

export default App;
