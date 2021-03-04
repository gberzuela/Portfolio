import React from "react";

import "./AboutPage.css";
import image from "../../public/Headshot.jpg";

const AboutPage = () => {
  return (
    <div className="aboutpage-container">
      <section className="aboutpage-info flex aic">
        <img src={image} alt="Headshot" />
        <section className="info">
          <h1>Gerald Lou Berzuela</h1>
          <section>
            By nature, I am a student, problem solver, and a helping hand. By
            choice, I am a software developer, dancer, and bodybuilder. I
            studied computer science, an ever growing field that allows me to
            tackle complex problems and with the potential to help the
            community. I spent three years at the University of California,
            Irvine but was unable to complete my degree because of personal and
            financial complications. The proceeding two years, I was helping the
            restaurant industry building up my personal skill set and sense of
            identity. I maintained my programming problem solving abilities
            through various online resources such as SoloLearn, Leetcode, and
            pair programming with previous college peers. Recently, I was
            accepted into, and, graduated from one of the most competitive
            coding bootcamps in the nation. Having been exposed to an entire
            Javascript stack, I look forward to continuing this journey and
            assisting companies as best I could.
          </section>
        </section>
      </section>
      <section className="aboutpage-info skills">
        <h1>Technical skills</h1>
        <ul>
          <li>
            Proficient: JavaScript, React, Redux, Firebase, Sequelize, Postgres,
            Express, Node, HTML, CSS
          </li>
          <li>
            Familiar: UX/UI design, React native, Mocha, Chai, Java, C++,
            Python, Ruby
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
