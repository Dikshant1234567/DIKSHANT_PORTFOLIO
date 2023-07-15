import React, { useState } from "react";
import "../styles/contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <div id="nav-contact">
      {open ? (
        <div
          className="toggle-show"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="10"
          data-aos-easing="ease-in-out"
        >
          <button>
            <a
              href="https://www.linkedin.com/in/dikshant-naudiyal-6415b0235/"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </button>
          <button>
            <a href="https://github.com/Dikshant1234567" target="_blank">
              <GitHubIcon />
            </a>
          </button>
          <button>
            <a
              href="mailto:dikshantnaudiyal06@gmail.com?subject=Hi Dikshant"
              target="_blank"
            >
              <EmailIcon />
            </a>
          </button>
        </div>
      ) : (
        false
      )}

      <button className="nav-action-btn">
        {open ? (
          <CloseIcon
            className="close-icon"
            onClick={() => {
              setOpen(false);
            }}
          />
        ) : (
          <AddIcon
            className="open-icon"
            onClick={() => {
              setOpen(true);
            }}
          />
        )}
      </button>
    </div>
  );
}

export default Contact;
