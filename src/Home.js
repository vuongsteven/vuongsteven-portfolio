import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Steven Vuong</h1>
      <p className="text-2xl text-gray-700 mb-8">DevOps Engineer</p>
      
      <div className="flex space-x-6 mb-8">
        <a href="https://github.com/vuongsteven" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/stevenvuong2000" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:steven.vuong@torontomu.ca" className="text-gray-800 hover:text-purple-600 transition-colors duration-300">
          <FaEnvelope size={30} />
        </a>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          I'm a software engineer with experience in DevOps, frontend and backend development. 
        </p>
        <p className="text-gray-700 mb-4">
            I have a degree in Mechatronics Engineering from Toronto Metropolitan University.
        </p>
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {['Python', 'Java', 'JavaScript', 'Python', 'AWS', 'Docker', 'Kubernetes'].map((skill) => (
            <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
