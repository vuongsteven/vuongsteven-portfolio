import React from 'react';

function WorkExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-800">Work Experience</h2>
      <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transition duration-300 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img 
              src="aerosoft_systems_inc_logo.jpeg"
              alt="Johnson Controls Logo" 
              className="w-16 h-16 mr-4 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600">Aerosoft Systems</h3>
              <p className="text-gray-600">Position: DevOps Engineer</p>
              <p className="text-gray-600">Duration: Jul 2023 - Nov 2023</p>
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li>Spearheaded SaaS migration initiative by transitioning legacy on-premises web services to a cloud-based architecture, leveraging AWS EC2 and RDS instances</li>
            <li>Developed Bash scripts to create robust and efficient deployment and configuration scripts, enabling seamless application deployment across testing and production environments</li>
          </ul>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transition duration-300 hover:shadow-2xl">
          <div className="flex items-center mb-4">
            <img 
              src="Johnson_Controls.png"
              alt="Johnson Controls Logo" 
              className="w-16 h-16 mr-4 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600">Johnson Controls</h3>
              <p className="text-gray-600">Position: Software Engineer Intern</p>
              <p className="text-gray-600">Duration: May 2021 - Aug 2022</p>
            </div>
          </div>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            <li> Developed and implemented a high-level automation framework and testing tools used to validate core features and functionalities of commercial security products in an embedded environment</li>
            <li>Built internal libraries in Java for mobile/web application testing, systems testing, and events validation, reducing manual testing efforts by 180%</li>
            <li>Implemented an automated emailable report to communicate regression test results in a readable format to QA testers, developers, and stakeholders, improving overall code review efficiency</li>
          </ul>
        </div>
        {/* Add more work experiences in similar styled divs */}
      </div>
    </div>
  );
}

export default WorkExperience;
