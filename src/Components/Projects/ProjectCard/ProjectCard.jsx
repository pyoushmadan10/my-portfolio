import React from 'react';

function ProjectCard({ item }) {
  return (
    <>
      <div className="img-box w-[80%] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
        <img src={item.img} alt="" className='w-full' />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20 transition-all duration-500 ease-in-out">
          <h1 className="font-bold text-3xl">{item.title}</h1>
          <p className="font-bold">{item.description}</p>
          
          <div className="flex justify-center mt-4 gap-4">
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="bg-black text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition duration-300">
              <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.3 1.1 2.8.8.1-.7.3-1.1.6-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.4.1-2.9 0 0 1-.3 3.4 1.2 1-.3 2.1-.5 3.2-.5s2.2.2 3.2.5c2.4-1.5 3.4-1.2 3.4-1.2.6 1.5.2 2.6.1 2.9.7.8 1.2 1.9 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.3.3.7.9.7 1.9v2.9c0 .3.2.6.8.5 4.5-1.5 7.8-5.8 7.8-10.9 0-6.3-5.2-11.5-11.5-11.5z"/></svg>
              GitHub
            </a>
            <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer bg-purple-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition duration-300">
              Live Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
