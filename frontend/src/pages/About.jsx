import React from 'react';

const AboutMe = () => {
  return (
    <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="shadow-md rounded-2xl p-8 w-full max-w-lg border border-gray-200">
        
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          About Me 
          <span className="material-symbols-outlined text-4xl ml-2">person</span>
        </h2>
        <p className="text-gray-500 mb-6">
          A little bit about the developer and this project.
        </p>

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="material-symbols-outlined text-2xl mr-3 text-black">badge</span>
            <div>
              <p className="font-semibold">Developer</p>
              <p className="text-gray-600">Sarthak Jasuja</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="material-symbols-outlined text-2xl mr-3 text-black">work</span>
            <div>
              <p className="font-semibold">Role</p>
              <p className="text-gray-600">Full Stack Developer Intern</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="material-symbols-outlined text-2xl mr-3 text-black">business_center</span>
            <div>
              <p className="font-semibold">Organization</p>
              <p className="text-gray-600">CodeUnia</p>
            </div>
          </div>

          <div className="flex items-start">
            <span className="material-symbols-outlined text-2xl mr-3 text-black">description</span>
            <div>
              <p className="font-semibold">Project</p>
              <p className="text-gray-600">
                This project was developed during my internship at CodeUnia.  
                It demonstrates my skills in building full stack applications, integrating modern UI design with backend functionality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
