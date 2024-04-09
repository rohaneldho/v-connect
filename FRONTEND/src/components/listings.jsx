import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Project({ project }) {
  const { name, desc, type, num } = project;

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center bg-white rounded-lg p-6 mb-4 shadow-md">
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">{name}</h2>
        <p className="text-gray-700 mb-2"><strong>Description:</strong> {desc}</p>
        <p className="text-gray-700 mb-2"><strong>Type:</strong> {type}</p>
        <p className="text-gray-700 mb-2"><strong>Number:</strong> {num}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300 mt-4 md:mt-0 md:ml-4">Apply</button>
    </div>
  );
}

function Listings() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from backend
    fetch('/listings')
      .then(response => response.text())  // Get response text
      .then(text => {
        try {
          return JSON.parse(text);  // Try to parse it as JSON
        } catch (error) {
          console.error('Error: The received data is not in JSON format');
        }
      })
      .then(data => {
        if (data) {
          setProjects(data);
        }
      })
      .catch(error => console.error('Error fetching project data:', error));
  }, []);

  const handleimgclick=()=>{
    navigate('/landing')
  }
  
  

  return (
    <>
          <div className="flex flex-col">
            <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
              <img onClick={handleimgclick} className="h-[7rem]" src="src\assets\vit.png" alt="VIT Logo" />
              <h1 className="Title text-4xl font-bold text-white">
                Vellore Institute Of Technology
              </h1>
              <div></div>
              <div></div>
            </div>
          </div>

     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      
      <div className="container text-center">
        <h1 className="text-6xl font-bold mb-12 text-blue-600">Project Postings</h1>
        {projects.map(project => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
    </>
   
  );
}

export default Listings;
