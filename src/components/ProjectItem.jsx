import "../styles/project-items.css";

function ProjectItem({value}) {
  return (
    <div className="projectItem">
      <div className="project-img">
        <img
          src={value.img}
          alt={value.title}
          style={{mixBlendMode: `${value.mixCss}`}}
        />
      </div>
      <div className="project-info">
        <h2>{value.title}</h2>
        <p>
        {value.description}
        </p>
        <h3>Teach Stack</h3>
        <ul>
          <li>{value.techStack[1]}</li>
          <li>{value.techStack[2]}</li>
          <li>{value.techStack[3]}</li>
        </ul>
        <button>
          <a href={value.linkToSite} target="_blank">Live</a>
        </button>
      </div>
    </div>
  );
}

export default ProjectItem;
