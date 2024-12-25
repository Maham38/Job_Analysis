// src/components/JobFilters.js

import React, { useState } from 'react';

const JobFilters = () => {
    const [location, setLocation] = useState('');
    const [jobType, setJobType] = useState('');
    const [savedPreferences, setSavedPreferences] = useState([]);

    const filterJobs = () => {
        alert(`Filtering jobs for location: ${location} and job type: ${jobType}`);
    };

    const savePreferences = () => {
        setSavedPreferences([...savedPreferences, { location, jobType }]);
        alert('Preferences saved!');
    };

    return (
        <div>
            <h2>Job Filters</h2>
            <input 
                type="text" 
                placeholder="Location" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Job Type" 
                value={jobType} 
                onChange={(e) => setJobType(e.target.value)} 
                required 
            />
            <button onClick={filterJobs}>Filter Jobs</button>
            <button onClick={savePreferences}>Save Preferences</button>
        </div>
    );
};

export default JobFilters;