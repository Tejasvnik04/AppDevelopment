import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

function Admin() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 

    return (
        <Layout>
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <div>
                        <h1>Welcome to the Admin Page</h1>
                        {loading && <p>Loading user data...</p>}
                        {error && <p>Error loading user data: {error.message}</p>}
                        {userData && !loading && !error && (
                            <div>
                                <p>Username: {userData.username}</p>
                                <p>Password: {userData.password}</p>
                                <p>Plants:</p>
                                <ul>
                                    {userData.plants.map((plant, index) => (
                                        <li key={index}>{plant}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Admin;
