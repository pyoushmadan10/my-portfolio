import React from 'react'
import "./About.scss"
import Letters from '../Letters/Letters.jsx'
import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    return (
      <>
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <Letters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
            "A code is like love; it was created with clear intentions at the beginning, but it can get complicated."
            </p>
            <p align="LEFT">
            I’m Pyoush Madan, a developer who thrives in both complexity and clarity. I approach every project with passion and purpose, seeing the "O" at the beginning of Opportunity, not the end of zero
            </p>
            <p>
            believing that challenges are simply the start of innovation. With a focus on clean, intentional design and a mindset driven by growth, I am committed to transforming ideas into impactful digital solutions.
            </p>
          </div>
  
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
        <Loader type="ball-beat" />
      </>
    )
  }
export default About;