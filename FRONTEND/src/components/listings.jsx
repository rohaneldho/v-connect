import React from 'react';

function Project({ title, description }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-4 mb-4 shadow-md">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">Apply</button>
    </div>
  );
}

function Listings() {
  return (
    <div className="bg-sky-blue min-h-screen flex justify-center items-center">
      <div className="container text-center">
        <h1 className="text-6xl font-bold mb-12">Project Postings</h1>
        <Project
          title="Project Title 1"
          description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Project
          title="Project Title 2"
          description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        {/* Add more projects here */}
      </div>
    </div>
  );
}

export default Listings;
