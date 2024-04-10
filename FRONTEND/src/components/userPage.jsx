import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import { useState } from "react";
import axios from "axios";
import  { useEffect } from "react";
export default function ProfilePage() {
  const [editing1, setEditing1] = React.useState(false);
  const [phone, setPhone] = React.useState("9207995728");
  const [instagram, setInstagram] = React.useState("www.instagram.com");
  const [twitter, setTwitter] = React.useState("www.twitter.com");
  const [linkedIn, setLinkedIn] = React.useState("www.LinkedIn.com");
  const [github, setGitHub] = React.useState("www.GITHUB.com");

  const [editing2, setEditing2] = useState(false);
  const [fullName, setFullName] = useState("Barack Obama");
  const [email, setEmail] = useState("BO@gmail.com");
  const [campus, setCampus] = useState("Chennai");
  const [skills, setSkills] = useState("C,C++");

  // State variables for project popup
  const [showPopup, setShowPopup] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projects, setProjects] = useState([]);
  const sendDataToBackend = async () => {
    console.log("hiiii")
    const data = {
      phone,
      instagram,
      twitter,
      linkedIn,
      github,
      fullName,
      email,
      campus,
      skills,
      projects,
    };
  
    try {
      const response = await axios.post('/userpage', data);
      console.log(response.data);
  
      // Update the state variables with the data received from the backend
      setPhone(response.data.phone);
      setInstagram(response.data.instagram);
      setTwitter(response.data.twitter);
      setLinkedIn(response.data.linkedIn);
      setGitHub(response.data.github);
      setFullName(response.data.fullName);
      setEmail(response.data.email);
      setCampus(response.data.campus);
      setSkills(response.data.skills);
      setProjects(response.data.projects);
    } catch (error) {
      console.error(error);
    }
  };const fetchUserDetails = async () => {
    try {
      // Make a GET request to fetch user details
      const response = await axios.get('/userpage');

      // Update state variables with user details from backend
      const userData = response.data;
      console.log("hi am data")
      console.log(userData.phone)
      setPhone(userData.phone);
      setInstagram(userData.instagram);
      setTwitter(userData.twitter);
      setLinkedIn(userData.linkedIn);
      setGitHub(userData.github);
      setFullName(userData.fullName);
      setEmail(userData.email);
      setCampus(userData.campus);
      setSkills(userData.skills);
      setProjects(userData.projects);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Call fetchUserDetails function after component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);
  

   
  

  const handleEdit1 = () => {
    setEditing1(!editing1);
  };

  const handleEdit2 = () => {
    setEditing2(!editing2);
  };

  // Define the openPopup function
  const openPopup = () => {
    setShowPopup(true);
  };

  // Define the closePopup function
  const closePopup = () => {
    setShowPopup(false);
  };

  // Define the addProject function
  const addProject = () => {
    setProjects([...projects, { name: projectName, description: projectDescription }]);
    setProjectName("");
    setProjectDescription("");
    setShowPopup(false);
  };

  return (
    <section className="bg-gray-200">
      <div className="flex flex-col">
        <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
          <img className="h-[7rem]" src="https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png" alt="VIT Logo" />
          <h1 className="Title text-4xl font-bold text-white">
            Vellore Institute Of Technology
          </h1>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            {/* Profile Card */}
            <div className="bg-white rounded-md p-4 m-10">
              {/* Profile Photo (Put the link here) */}
              <img
                src="src\assets\Barack-Obama.webp"
                alt="avatar"
                className="rounded-full mx-auto mb-4"
                style={{ width: "150px" }}
              />
              <div className="text-center">
                <p className="text-gray-600 mb-1">Full Stack Developer</p>
                <p className="text-gray-600 mb-4">Chennai, Tamil Nadu</p>
                <div className="flex justify-center">
                  <button className="btn-primary mr-2">Follow</button>
                  <button className="btn-outline-primary">Message</button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-4 bg-white rounded-md p-4 m-10">
              <ul className="list-group">
                {/* Phone */}
                <li className="list-group-item flex justify-between items-center m-2">
                  <CallIcon />
                  {editing1 ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  ) : (
                    <>
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <span>{phone}</span>
                    </>
                  )}
                </li>
                {/* Instagram */}
                <li className="list-group-item flex justify-between items-center m-2">
                  <InstagramIcon />
                  {editing1 ? (
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  ) : (
                    <>
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <span>{instagram}</span>
                    </>
                  )}
                </li>
                {/* Twitter */}
                <li className="list-group-item flex justify-between items-center m-2">
                  <XIcon />
                  {editing1 ? (
                    <input
                      type="text"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                    />
                  ) : (
                    <>
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <span>{twitter}</span>
                    </>
                  )}
                </li>
                {/* LinkedIn */}
                <li className="list-group-item flex justify-between items-center m-2">
                  <LinkedInIcon />
                  {editing1 ? (
                    <input
                      type="text"
                      value={linkedIn}
                      onChange={(e) => setLinkedIn(e.target.value)}
                    />
                  ) : (
                    <>
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <span>{linkedIn}</span>
                    </>
                  )}
                </li>
                {/* GitHub */}
                <li className="list-group-item flex justify-between items-center m-2">
                  <GitHubIcon />
                  {editing1 ? (
                    <input
                      type="text"
                      value={github}
                      onChange={(e) => setGitHub(e.target.value)}
                    />
                  ) : (
                    <>
                      <i className="fas fa-globe fa-lg text-warning"></i>
                      <span>{github}</span>
                    </>
                  )}
                </li>
              </ul>
              {/* Edit Button */}
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleEdit1}>
                  {editing1 ? "Save" : "Edit"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 mt-10">
            {/* Profile Details */}
            <div className="bg-white rounded-md p-4 mb-4">
              {/* Personal Information */}
              <div className="flex flex-wrap mb-2">
                <div className="w-full lg:w-1/4">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="w-full lg:w-3/4">
                  {editing2 ? (
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 outline-none"
                    />
                  ) : (
                    <p className="text-gray-600 mb-0">{fullName}</p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-wrap mb-2">
                <div className="w-full lg:w-1/4">
                  <p className="mb-0">Email</p>
                </div>
                <div className="w-full lg:w-3/4">
                  {editing2 ? (
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 outline-none"
                    />
                  ) : (
                    <p className="text-gray-600 mb-0">{email}</p>
                  )}
                </div>
              </div>
              {/* Campus */}
              <div className="flex flex-wrap mb-2">
                <div className="w-full lg:w-1/4">
                  <p className="mb-0">Campus</p>
                </div>
                <div className="w-full lg:w-3/4">
                  {editing2 ? (
                    <input
                      type="text"
                      value={campus}
                      onChange={(e) => setCampus(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 outline-none"
                    />
                  ) : (
                    <p className="text-gray-600 mb-0">{campus}</p>
                  )}
                </div>
              </div>
              {/* Skills */}
              <div className="flex flex-wrap mb-2">
                <div className="w-full lg:w-1/4">
                  <p className="mb-0">Skills</p>
                </div>
                <div className="w-full lg:w-3/4">
                  {editing2 ? (
                    <input
                      type="text"
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 outline-none"
                    />
                  ) : (
                    <p className="text-gray-600 mb-0">{skills}</p>
                  )}
                </div>
              </div>
              {/* Edit Button */}
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleEdit2}>
                  {editing2 ? "Save" : "Edit"}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-md h-[23rem] p-4 mb-4">
              PROJECTS
              <button className="btn btn-primary" onClick={openPopup}>
                Add Project
              </button>
              
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Add Project</h2>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full mb-2 border rounded-md p-2"
              placeholder="Project Name"
            />
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              className="w-full mb-2 border rounded-md p-2"
              rows="4"
              placeholder="Project Description"
            ></textarea>
            <div className="flex justify-end">
              <button onClick={addProject} className="btn btn-primary mr-2">
                Add
              </button>
              <button onClick={closePopup} className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="text-center">
  <button className="btn btn-primary" onClick={sendDataToBackend}>
    Save
  </button>
</div>

    </section>
  );
}