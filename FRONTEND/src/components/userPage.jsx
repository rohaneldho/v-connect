import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from 'react-router-dom';


import axios from "axios";
export default function ProfilePage() {
  const navigate=useNavigate();
  const [editing1, setEditing1] = useState(false);
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGitHub] = useState("");

  const [editing2, setEditing2] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [campus, setCampus] = useState("");
  const [skills, setSkills] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const storedPhone = localStorage.getItem("phone");
    if (storedPhone) setPhone(storedPhone);
    
    const storedInstagram = localStorage.getItem("instagram");
    if (storedInstagram) setInstagram(storedInstagram);

    const storedTwitter = localStorage.getItem("twitter");
    if (storedTwitter) setTwitter(storedTwitter);

    const storedLinkedIn = localStorage.getItem("linkedin");
    if (storedLinkedIn) setLinkedIn(storedLinkedIn);

    const storedGithub = localStorage.getItem("github");
    if (storedGithub) setGitHub(storedGithub);

    
    const storedFullName = localStorage.getItem("fullName");
    if (storedFullName) setFullName(storedFullName);
    
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);
    
    const storedCampus = localStorage.getItem("campus");
    if (storedCampus) setCampus(storedCampus);
    
    const storedSkills = localStorage.getItem("skills");
    if (storedSkills) setSkills(storedSkills);
  }, []);
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

  const handleimgclick = () => {
    navigate('/landing');
  };

  // const openPopup = () => {
  //   setShowPopup(true);
  // };

  // const closePopup = () => {
  //   setShowPopup(false);
  // };

  // const addProject = () => {
  //   const newProject = { name: projectName, description: projectDescription };
  //   setProjects([...projects, newProject]);
  //   setProjectName("");
  //   setProjectDescription("");
  //   closePopup();
  // };

  // Function to save state variables to local storage
  useEffect(() => {
    localStorage.setItem("phone", phone);
    localStorage.setItem("instagram", instagram);
    localStorage.setItem('twitter',twitter);
    localStorage.setItem('linkedin',linkedIn);
    localStorage.setItem('github',github);
    

    localStorage.setItem("fullName", fullName);
    localStorage.setItem()
  }, [phone, instagram,twitter,linkedIn,github, fullName]);

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
          <button onClick={handleimgclick}>
            <img className="h-[7rem]"  src="https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png" alt="VIT Logo" />
          </button>
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
            <div className="bg-white rounded-md p-4 m-10">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg"
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
            <div className="mt-4 bg-white rounded-md p-4 m-10">
              <ul className="list-group">
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
                {/* Repeat for other social links */}
              </ul>
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleEdit1}>
                  {editing1 ? "Save" : "Edit"}
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 mt-10">
            <div className="bg-white rounded-md p-4 mb-4">
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
              {/* Repeat for other personal information */}
              <div className="text-center">
                <button className="btn btn-primary" onClick={handleEdit2}>
                  {editing2 ? "Save" : "Edit"}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-md h-[23rem] p-4 mb-4">
              PROJECTS
              <br />
              <button className="btn btn-primary bg-blue-200 px-5 py-3 m-2 rounded-xl" onClick={openPopup}>
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
