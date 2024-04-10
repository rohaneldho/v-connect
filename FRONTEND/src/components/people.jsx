import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PeopleList = () => {
    const navigate = useNavigate();
  const [people, setPeople] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSkill, setSearchSkill] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/people');
        setPeople(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPeople = people.filter(person => 
    person.fullName.toLowerCase().includes(searchName.toLowerCase()) &&
    person.skills.join(', ').toLowerCase().includes(searchSkill.toLowerCase())
  );

  const handleimgclick = async(e) => {
    navigate('/landing');
  }

  return (
    <div style={{ backgroundColor: '#e1f5fe', minHeight: '100vh', padding: '0px', margin: 0 }}>
      <div className="flex flex-col">
        <div className="main  flex justify-between items-center w-screen h-[7rem] bg-gray-800">
          <img onClick={handleimgclick} className="h-[7rem]" src="https://findlogovector.com/wp-content/uploads/2022/05/vellore-institute-of-technology-vit-logo-vector-2022.png" alt="VIT Logo" />
          <h1 className="Title text-4xl font-bold text-white">
            Vellore Institute Of Technology
          </h1>
          <div></div>
          <div></div>
        </div>
      </div>
      <br></br><br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={searchName} onChange={e => setSearchName(e.target.value)} placeholder="Search by name" style={{marginBottom: '10px', borderRadius: '12px', padding: '10px', border: 'none', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', width: '80%', maxWidth: '600px'}} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" value={searchSkill} onChange={e => setSearchSkill(e.target.value)} placeholder="Search by skill" style={{marginBottom: '20px', borderRadius: '12px', padding: '10px', border: 'none', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', width: '80%', maxWidth: '600px'}} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {filteredPeople.map((person, index) => (
          <div key={index} style={{ backgroundColor: '#bbdefb', padding: '20px', marginBottom: '20px', borderRadius: '10px', width: '80%', maxWidth: '600px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
            <div style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {person.fullName}
            </div>
            <div>
              <strong>Skills:</strong> {person.skills.join(', ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
