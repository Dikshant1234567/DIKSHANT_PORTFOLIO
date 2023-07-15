import "../styles/education.css";

function Education() {
  return (
    <section id="education">
      <h1
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        Education
      </h1>
      <div className="education-info">
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <p>
            <b> School: </b> <br /> The Daffodials Public School.
          </p>
          <br />
          <p>
            <b>Class 10th :</b> 83%
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <p>
            <b> School: </b> <br /> Happy Home Public School
          </p>
          <br />
          <p>
            <b>Class 12th :</b> 87% with PCM
          </p>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <p>Currently a 3rd year student in Shri Dev Suman University</p>
          <br />
          <p>
            <b>Course :</b> BSc
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
