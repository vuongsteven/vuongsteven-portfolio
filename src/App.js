import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import WorkExperience from './WorkExperience';
import Blog from './Blog';  // Added this line

function App() {
  return (
    <Router>
      <div className="font-sans antialiased">
        <Navbar />
        <main className="transition-all duration-300">
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/experience" element={<WorkExperience/>} />
            <Route path="/blog" element={<Blog/>} />  {/* Added this line */}
        </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
