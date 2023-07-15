import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectItem from "./ProjectItem";
import "../styles/project.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Data = [
  {
    // img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/whats-app-1-design-template-05f1215e07ed5b8207a19627c5509371_screen.jpg?ts=1592728794",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png",
    title: "WhatsApp-clone",
    mixCss: "darken",
    description:
      "A messaging app where you can start realtime chatting with your file with your google account and check the online/offline status of your friend and you can check out the older messages and your profile about.",
    linkToSite: "https://whatsapp-clone-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "MUI",
      3: "Soket.io"
    },
  },
  {
    // img: "https://images.squarespace-cdn.com/content/v1/5e8d65fd1b8f0c5457e8a687/1588925699853-NE60MQOHRBCD4VRVP2AG/2020-05-08_12-35-11.png",
    img : "https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png",
    title: "Flipkart-clone",
    mixCss: "darken",
    description:
      "A flipkart clone where you can Sinup-Login and checkout the product details and place your oder.",
    linkToSite: "https://flipkart-clone-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "Redux",
      3: "MUI",
    },
  },
  {
    // img: "https://i.pcmag.com/imagery/roundups/03yy022DDsenwhBBYdxvwDi-3..v1593631883.jpg",
    img: 'https://w7.pngwing.com/pngs/886/137/png-transparent-file-sharing-file-hosting-service-box-secure-miscellaneous-text-logo.png',
    title: "Online File-sharing Application",
    mixCss: "hard-light",
    description:
      "An Online file sharing application where you can upload your images and get a porper HTTPS link to share the file with your friends.",
    linkToSite: "https://file-sharing-dikshant.netlify.app/",
    techStack: {
      1: "MERN",
      2: "MUI",
      3: "Multer",
    },
  },
  {
    // img: "https://w7.pngwing.com/pngs/205/164/png-transparent-hotel-motel-gratis-hotel-text-presentation-logo.png",
    
    img: 'https://img.freepik.com/free-vector/hotel-booking-concept-illustration_114360-2257.jpg?w=2000',
    title: "Mini Room-Booking",
    mixCss: "darken",
    description:
      "A mini room booking website, with clean UI & proper responsiveness for all kind of screen.",
    linkToSite: "https://booking-miniclone.netlify.app/",
    techStack: {
      1: "Frontend",
      2: "React",
      3: "Mui-icons",
    },
  },
];

function Project() {
  return (
    <section id="project">
      <h1
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        Projects
      </h1>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        transitionDuration={500}
        autoPlaySpeed={200}
        arrows={false}
      >
        {
          Data.map((value)=><ProjectItem value={value} />)
        }
        

      </Carousel>
    </section>
  );
}

export default Project;
