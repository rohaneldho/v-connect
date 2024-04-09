import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import CallIcon from '@mui/icons-material/Call';

export default function ProfilePage() {
  const [editing1, setEditing1] = React.useState(false);
  const [phone, setPhone] = React.useState('9207995728');
  const [instagram, setInstagram] = React.useState('www.instagram.com');
  const [twitter, setTwitter] = React.useState('www.twitter.com');
  const [linkedIn, setLinkedIn] = React.useState('www.LinkedIn.com');
  const [github, setGitHub] = React.useState('www.GITHUB.com');

  const [editing2, setEditing2] = React.useState(false);
  const [fullName, setFullName] = React.useState('Barack Obama');
  const [email, setEmail] = React.useState('BO@gmail.com');
  const [campus, setCampus] = React.useState('Chennai');
  const [skills, setSkills] = React.useState('C,C++');

  const handleEdit1 = () => {
    setEditing1(!editing1);
  };

  const handleEdit2 = () => {
    setEditing2(!editing2);
  };

  return (
    
    <section className="bg-gray-200">
      <div className="flex flex-col">
            <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
              <img className="h-[7rem]" src="src\assets\vit.png" alt="VIT Logo" />
              <h1 className="Title text-4xl font-bold text-white">
                Vellore Institute Of Technology
              </h1>
              <div></div>
              <div></div>
            </div>
          </div>
      <div className="container mx-auto">

        <div className="flex flex-wrap">
          {/* Profile Card */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <div className="bg-white rounded-md p-4 m-10">
              {/* Profile Photo (Put the link here) */}
              <img src="src\assets\Barack-Obama.webp" alt="avatar" className="rounded-full mx-auto mb-4" style={{ width: '150px' }} />
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
                  <CallIcon/>
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
                  <InstagramIcon/>
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
                  <XIcon/>
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
                  <LinkedInIcon/>
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
                  <GitHubIcon/>
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
                <button
                  className="btn btn-primary"
                  onClick={handleEdit1}
                >
                  {editing1 ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="w-full lg:w-2/3 mt-10">
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
                <button
                  className="btn btn-primary"
                  onClick={handleEdit2}
                >
                  {editing2 ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>




            <div className="bg-white rounded-md h-[23rem] p-4 mb-4">
            PROJECTS
          </div>




          </div>

        </div>
      </div>
    </section>
  );
}
