import React, { Component } from "react";
import Letters from "../Letters/Letters.jsx";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DynamicIconCloud from "./DynamicIconCloud/DynamicIconCloud";
import "./Skills.scss";
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const string = "SKILLS";
  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <Letters
              letterClass={letterClass}
              strArray={[...string]}
              idx={15}
            />
          </h1>
          <p>
          I specialize in crafting responsive and dynamic web applications with a solid foundation in front-end and back-end technologies.
          </p>
          <p align="LEFT">
          My expertise spans HTML, CSS, and JavaScript, complemented by modern frameworks like ReactJS, Tailwind CSS, and Material UI. For seamless animations and smooth user experiences, I leverage Framer Motion, while SCSS allows me to manage styling efficiently.
          </p>
          <p>
          On the programming side, I’m proficient in languages like C, C++, and Python, using libraries like OpenCV, Numpy, and Beautiful Soup for data processing and computer vision tasks. My diverse skill set empowers me to build robust, scalable, and visually appealing digital solutions.
          </p>
        </div>

        <div className="dynamic-icon-cloud">
          <DynamicIconCloud />
        </div>
      </div>
      <Loader type="ball-beat" />
    </>
  );
};

export default Skills;
