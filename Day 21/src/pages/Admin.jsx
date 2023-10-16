import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

function Admin() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 async function fetchUsers()
 {
    const[users,SetUsers]=useState([]);
    try {
        const response = await axios.get('http://localhost:8080/getusers', {
          headers: {
            'Authorization':
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Mjc4MjF0dWFkMDU2QHNrY3QuZWR1LmluIiwiaWF0IjoxNjk3MzczNjQ3LCJleHAiOjE2OTc0NjAwNDd9.L_llrn8G8sI1DO7ZRIZ_vcU2tkX8qZcFoNC5g42QM3Y',
            'Content-Type': 'application/json',
          },
        });
        SetUsers(response.data); // Assuming your API returns an array of plant data
        // console.log(plants)
      } catch (error) {
        console.error('Error fetching plants:', error);
      }

 }

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
