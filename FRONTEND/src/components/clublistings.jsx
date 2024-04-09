import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ClubListings() {
  const [clubs, setClubs] = useState([]);
  

  // Form state
  const [clubName, setClubName] = useState('');
  const [eventType, setEventType] = useState('');
  const [description, setDescription] = useState('');
  const [googleFormLink, setGoogleFormLink] = useState('');
  const [logo, setLogo] = useState(null);

  const handleClubNameChange = (e) => setClubName(e.target.value);
  const handleEventTypeChange = (e) => setEventType(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleGoogleFormLinkChange = (e) => setGoogleFormLink(e.target.value);
  const handleLogoChange = (e) => setLogo(e.target.files[0]);

  

  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a FormData object
    const formData = new FormData();
    formData.append('name', clubName);
    formData.append('type', eventType);
    formData.append('desc', description);
    formData.append('googleFormLink', googleFormLink);
    formData.append('posterImage', logo);
  
    // Construct club data
    const newClub = {
      clubName,
      description,
      type: eventType,
      googleFormLink,
      logo
    };
  
    // Send a POST request to your Express server
    axios.post('/clublisting', formData)
      .then(response => {
        console.log(response.data);
        // Add the new club to the list
        setClubs([...clubs, newClub]);
        // Reset form fields
        setClubName('');
        setEventType('');
        setDescription('');
        setGoogleFormLink('');
        setLogo(null);
      })
      .catch(error => {
        console.error(error);
      });
  };
  

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container text-center">
        <h1 className="text-6xl font-bold mb-12 text-blue-600">Club Listings</h1>
        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-4">
           
            
         
          {/* Club Name */}
          <div>
          <input type="text" value={clubName} onChange={handleClubNameChange} placeholder="Club Name" className="mb-4 px-3 py-2 border rounded-md w-[45%] h-[5%]" />
          </div>
           {/* Event Type */}
           <div>
           <select value={eventType} onChange={handleEventTypeChange} className="mb-4 px-3 py-2 border rounded-md w-[45%] h-[5%]">
            <option value="">Select Type</option>
            <option value="event">Event</option>
            <option value="club_recruitment">Club Recruitment</option>
          </select>
           </div>
         
          {/* Description */}
          <div>
          <textarea value={description} onChange={handleDescriptionChange} placeholder="Description" className="mb-4 px-3 py-2 border rounded-md w-[45%] h-[10rem]"></textarea>
          </div>
          {/* Google Form Link */}
          <div>
          <input type="text" value={googleFormLink} onChange={handleGoogleFormLinkChange} placeholder="Google Form Link" className="mb-4 px-3 py-2 border rounded-md w-[45%] h-[5%] " />
          </div>
          {/* Logo Upload */}
          <div>
          <input type="file" accept="image/*" onChange={handleLogoChange} className="mb-4" />
          
          </div>
          {/* Submit Button */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
        {/* Display Clubs */}
        
      </div>
    </div>
  );
}

export default ClubListings;
