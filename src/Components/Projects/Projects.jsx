import React, { useEffect, useState } from 'react';
import "./Projects.scss";
import Loader from 'react-loaders';
import ProjectCard from './ProjectCard/ProjectCard';
import img1 from "../../assets/images/project-img4.png";
import img2 from "../../assets/images/project-img5.png";
import img3 from "../../assets/images/project-img6.png";
import img4 from "../../assets/images/project-img8.png";
import Letters from '../Letters/Letters.jsx';

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);
  const [durum, setDurum] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this timeout as needed
  }, []);

  const str = "Projects";
  const arr = [...str];

  const projects = [
    {
      id: 1,
      title: "Budget-Bee",
      description: "Developed a React-based expense tracker app with Material UI for managing and displaying sorted transactions, including options to delete and update entries seamlessly.",
      img: img1,
      livelink:"https://budget-bee-gamma.vercel.app/",
      github:"https://github.com/pyoushmadan10/budget-bee"
    },
    {
      id: 2,
      title: "Profile Card",
      description: "Created this profile card using tailwind CSS.",
      img: img2,
      livelink:"https://github.com/pyoushmadan10/profile-page/deployments/github-pages",
      github:"https://github.com/pyoushmadan10/profile-page"
    },
  ];

  const projects2 = [
    {
      id: 3,
      title: "Chat Buddy",
      description: "Created a chat app with Google sign-in using Firebase, enabling multiple users to send and display messages with usernames in real-time.",
      img: img3,
      livelink:"https://chat-buddy-theta.vercel.app/",
      github:"https://github.com/pyoushmadan10/chat-buddy"
    },
    {
      id: 4,
      title: "Accio News",
      description: "Developed a Telegram bot using Python and Dialogflow with an integrated news feature across 8 topics, allowing users to either chat or directly select topics for news updates.",
      img: img4,
      livelink:"https://t.me/pyoush_bot",
      github:"https://github.com/pyoushmadan10/bot-telegram"
    }
  ];

  return (
    <>
      {loading ? (
        <Loader type="ball-beat" />
      ) : (
        <div id="projects" className="projects text-white py-10">
          <h1 className="text-center projects-heading font-bold py-6">
            <Letters
              letterClass={letterClass}
              strArray={arr}
              idx={15}
            />
          </h1>
          <div className="flex justify-center items-center gap-4 mt-12 mb-2">
            <button
              onClick={() => setDurum(1)}
              className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum === 1 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""}`}
            >
              Projects 1
            </button>
            <button
              onClick={() => setDurum(2)}
              className={`font-bold text-[19px] border-2 bg-[#171717] rounded-[6px] p-[4px] ${durum === 2 ? "bg-[linear-gradient(90deg,#b004b0,#38097a)]" : ""}`}
            >
              Projects 2
            </button>
          </div>
          {durum === 1 && (
            <div id="projects-1" className="grid grid-cols-2 p-10 px-[10%] justify-center items-center gap-8 lg:grid-cols-2 md:grid-cols-1 tl:grid-cols-1">
              {projects.map((item, i) => <ProjectCard key={i} item={item} />)}
            </div>
          )}
          {durum === 2 && (
            <div id="projects-2" className="grid grid-cols-2 p-10 px-[10%] mb-[50%] justify-center items-center gap-8 lg:grid-cols-2 md:grid-cols-1 tl:grid-cols-1">
              {projects2.map((item, i) => <ProjectCard key={i} item={item} />)}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Projects;
