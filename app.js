// src/App.js

import React from 'react';
import ProfileManagement from './components/ProfileManagement';
import JobFilters from './components/JobFilters';

const App = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Job Portal</h1>
            <ProfileManagement />
            <JobFilters />
        </div>
    );
};

export default App;