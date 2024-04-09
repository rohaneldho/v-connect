import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
// import { useNavigate } from 'react-router-dom';

const MakeProj = () => {
  const navigate=useNavigate();
  

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission
  const data = new FormData(e.target);
  const name = data.get("project-name");
  const desc = data.get("project-description");
  const num = data.get("no-of-people");
  const type = data.get("project-type");

  // Create an object to send as JSON
  const projectData = {
    name: name,
    desc: desc,
    num: num,
    type: type
  };

  // Send the data to the backend
  axios.post('/makeproj', projectData)
    .then(response => {
      console.log(response.data);
      alert('Project has been posted successfully!'); // Alert the user
      e.target.reset(); // Reset the form
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
const handleimgclick=()=>{
  navigate('/landing')
}



  return (
    <div>
 <div className="flex flex-col">
            <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
              <img onClick={handleimgclick}  className="h-[7rem]" src="src\assets\vit.png" alt="VIT Logo" />
              <h1 className="Title text-4xl font-bold text-white">
                Vellore Institute Of Technology
              </h1>
              <div></div>
              <div></div>
            </div>
          </div>
      <main className="p-4">
        <section className="post-project max-w-xl mx-auto">
          <h2 className="text-lg font-bold mb-4">Post a Project</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
              <label htmlFor="project-name" className="block mb-1">
                Project Name:
              </label>
              <input
                type="text"
                id="project-name"
                name="project-name"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="project-description" className="block mb-1">
                Project Description:
              </label>
              <textarea
                id="project-description"
                name="project-description"
                rows="4"
                className="w-full px-3 py-2 border rounded-md"
                required
              ></textarea>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="no-of-people" className="block mb-1">
                Number of People Needed:
              </label>
              <input
                type="number"
                id="no-of-people"
                name="no-of-people"
                min="1"
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="project-type" className="block mb-1">
                Project Type:
              </label>
              <select
                id="project-type"
                name="project-type"
                className="w-full px-3 py-2 border rounded-md"
                required
              >
                <option value="">Select Type</option>
                <option value="hackathon">Hackathon</option>
                <option value="personal-project">Personal Project</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Post Project
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MakeProj;
