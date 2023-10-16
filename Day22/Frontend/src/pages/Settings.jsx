import React, { useState ,useEffect} from 'react';
import Layout from '../components/Layout';
import { useSelector, useDispatch } from 'react-redux';
import background from './one.jpg';
import { deletePlants ,addPlants} from '../redux/userSlice';
import axios from 'axios';

function Settings() {
    const [plants, setPlants] = useState([])
    const dispatch = useDispatch();

    async function fetchPlants() {
        try {
            const response = await axios.get('http://localhost:8080/api/plants/get',{
              headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3Mjc4MjF0dWFkMDU2QHNrY3QuZWR1LmluIiwiaWF0IjoxNjk3MzczNjQ3LCJleHAiOjE2OTc0NjAwNDd9.L_llrn8G8sI1DO7ZRIZ_vcU2tkX8qZcFoNC5g42QM3Y",
                'Content-Type':"application/json"
              }
            });
            setPlants(response.data) // Assuming your API returns an array of plant data
            // console.log(plants)
        } catch (error) {
            console.error('Error fetching plants:', error);
        }
    }

    useEffect(() => {
        fetchPlants();
    }, []);

 // const handleDelete = async (id) => {
    // try {
     
    //   await axios.delete(`http://localhost:8080/api/plants/delete?id=${id}`,{
    //     headers:{
    //       'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnaGYiLCJpYXQiOjE2OTY5MTU3NDcsImV4cCI6MTY5NzAwMjE0N30.FTQSFRPheR1EwrK1-di6dCz5RvR6wXfU6R0qDgVr3-s",
    //       'Content-Type':"application/json"
    //     }
    //   });
    //   fetchPlants();
     
    //   dispatch(deletePlants({ id }));
    // } catch (error) {
    //   console.error('Error deleting plant:', error);
    // }
  //};


  return (
    <>
      <Layout />
      <div className='main-wrapper-settings' style={{ backgroundImage: `url(${background})`, zIndex:-1 , position:'fixed' }}>
        <div className='welcome-container-settings'style={{zIndex:-1}}>
          <h2 style={{fontSize:"25px" , marginLeft:"70px"}}>Admin Dashboard</h2>
          <table style={{ marginLeft:"80px"
          }}>
            <thead>
              <tr>
                <th>Plant Name</th>
                <th>Plant Type</th>
                <th>Room</th>
                <th>Watering Necessity</th>
                <th>Sunlight Necessity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((plant, index) => (
                <tr key={plant.id}>
                  <td>{plant.plantName}</td>
                  <td>{plant.plantType}</td>
                  <td>{plant.room}</td>
                  <td>{plant.watering}</td>
                  <td>{plant.sunlight}</td>
                  <td>
                    {
                        console.log(plant)
                    }
                    <button onClick={(event) => handleDelete(plant.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <footer />
    </>
  );
}

export default Settings;
