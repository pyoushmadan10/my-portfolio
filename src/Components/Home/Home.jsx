import React from 'react'
import "./Home.scss";
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import Letters from '../Letters/Letters.jsx'
import AnimatedSvg from './AnimatedSvg/AnimatedSvg.jsx'
import { motion } from "framer-motion";
export default function Home() {
  const sliderVariants = {
    initial: {
      x:0,
    },
    animate: {
      x: "-660%",
      transition: {
        repeat: Infinity,
        repeatType:"mirror",
        duration: 45,
      },
    },
  };
    const [letterClass, setLetterClass] = useState('text-animate')
    const str=" Pyoush"
    const nameArray = [...str]
    const str1="web Developer."
  const jobArray = [...str1]
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
      return (
        <>
          <div className="container home-page">
          <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          DEVELOPER LEARNER PROGRAMMER
        </motion.div>
            <div className="text-zone">
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <Letters
                  letterClass={letterClass}
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <Letters
                  letterClass={letterClass}
                  strArray={jobArray}
                  idx={22}
                />
              </h1>
              <h2>Front End Developer / Competitive Programmer  /Tech Enthusiast</h2>
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
            <div className='flex items-center justify-center'>
            <AnimatedSvg />
            </div>
            </div>
            <Loader type="ball-beat" />
            </>
      )
}
