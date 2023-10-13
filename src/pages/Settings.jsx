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
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrdmlAZ21haWwuY29tIiwiaWF0IjoxNjk3MTcyMjYwLCJleHAiOjE2OTcyNTg2NjB9.f4ZVvXvs4TpaVZrRcHiRdBvJFS6DrrxQ85GxsZvzZw8",
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
    }, [plants]);

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
          <h2>Admin Dashboard</h2>
          <table>
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
                  <td>{plant.water}</td>
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
