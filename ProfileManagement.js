// src/components/ProfileManagement.js

import React, { useState } from 'react';

const ProfileManagement = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState(null);
    const [profilePic, setProfilePic] = useState(null);

    const handleResumeUpload = (event) => {
        setResume(event.target.files[0]);
    };

    const handleProfilePicUpload = (event) => {
        setProfilePic(URL.createObjectURL(event.target.files[0]));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Profile saved successfully!');
        // Here you can add logic to save the profile data
    };

    return (
        <div>
            <h2>Profile Management</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="file" 
                    accept=".pdf" 
                    onChange={handleResumeUpload} 
                    required 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleProfilePicUpload} 
                    required 
                />
                <button type="submit">Save Profile</button>
            </form>
            {profilePic && <img src={profilePic} alt="Profile" style={{ width: 100, height: 100 }} />}
            {resume && <p>Resume: {resume.name}</p>}
        </div>
    );
};

export default ProfileManagement;