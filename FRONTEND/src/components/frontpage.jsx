import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Frontpage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div>
      {/* Menu Bar */}
      <div className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <img src="https://chennai.vit.ac.in/wp-content/uploads/2024/01/vit-logo.png" alt="VIT Logo" className="w-30 h-auto" />
          </div>
          <div className="text-white">
            <ul className="flex space-x-8"> {/* Increased space between menu items */}
              <li>
                    <Link to="/login" className="block text-white hover:text-gray-300">Student Sign In</Link>
              </li>
              <li>
                    <Link to="/clublogin" className="block text-white hover:text-gray-300">Club Sign In</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-300">Student Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content p-4">
        {/* Boxes Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Box 1: Project Listings */}
          <div className="box bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://static.toiimg.com/thumb/msid-104145326,width-1280,height-720,resizemode-72/104145326.jpg" alt="Project Listings" className="w-[100rem] h-[25rem]" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Project Listings</h2>
              <p className="text-gray-600">Browse through project listings to find exciting 
              opportunities to collaborate and showcase your skills. 
              Connect with fellow students to bring your ideas to life and make a difference.</p>
            </div>
          </div>
          {/* Box 2: Club */}
          <div className="box bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://pbs.twimg.com/media/CLjE6ESUcAAosp0.jpg" alt="Club" className="w-[100rem] h-[25rem]" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Club</h2>
              <p className="text-gray-600">Explore the vibrant tapestry of student life at 
              VIT through our diverse array of clubs and organizations. 
              From academic pursuits to artistic endeavors, sports teams to cultural groups,
              our clubs cater to a wide range of interests and passions. 
              Discover your community, unleash your potential, and make your mark at VIT.</p>
            </div>
          </div>
          {/* Box 3: Events */}
          <div className="box bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://vit.ac.in/system/files/DSC04178%20copy.jpg" alt="Events" className="w-[100rem] h-[25rem]" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Events</h2>
              <p className="text-gray-600">Find out about upcoming events. Discover a range of events that cater to your interests and passions. From workshops to seminars, there's something for everyone. 
              Join us in creating memorable experiences and forging lasting connections.</p>
            </div>
          </div>
          {/* Box 4: Chat Connect */}
          <div className="box bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://www.qschina.cn/sites/default/files/profiles-slideshow/27-995a9006-copy2.jpg" alt="Chat Connect" className="w-[100rem] h-[25rem]" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Chat Connect</h2>
              <p className="text-gray-600">Your go-to platform for staying connected with fellow VITians. 
              Engage in real-time discussions, find study partners, and stay updated on campus events. 
              Join the conversation and be part of the community!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="flex justify-center space-x-4">
          <a href="https://github.com"><img src="/github-logo.png" alt="GitHub Logo" className="w-8 h-8" /></a>
          <a href="https://instagram.com"><img src="/instagram-logo.png" alt="Instagram Logo" className="w-8 h-8" /></a>
          <a href="https://vit.ac.in"><img src="/vit-website-logo.png" alt="VIT Website Logo" className="w-8 h-8" /></a>
        </div>
        <p>Made by Thomas & Friends</p>
      </footer>
    </div>
  );
}

export default Frontpage;