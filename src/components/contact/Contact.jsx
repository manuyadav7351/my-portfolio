import React from "react";
import "./contact.scss";
import ResumeButton from "./ResumeButton";
 
const contact = () => {
  return (
    <div className="contact">
      <div className="border" data-text="">
      <div className="contact-form">
        <form action="./Contact.jsx">
          <div className="grid-header">
            <div className="contact-form-grid">
              <input type="text" name="name"  placeholder="name" />
              <input type="email" name="email" placeholder="email" />
              <input type="text" name="subject" placeholder="subject" />
              <input type="text" name="message" placeholder="message" />
            </div>
            <button type="submit" className="submit">submit</button>
          </div>
        </form>
      </div>
      <div className="contact-heading">
        <h3>OPEN TO WORK</h3>
      </div>
      <div className="contact-resume">
        <ResumeButton />
      </div>
      <div className="contact-socialMedia">
        <div className="socialMedia">
          <div className="icon"><button>GitHub</button></div>
          <div className="icon"><button>Linked In</button></div>
          <div className="icon"><button>Email</button></div>
          <div></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default contact;
