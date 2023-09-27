import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDonor } from '../features/donorsSlice';
import './Donor.css';

function AddDonor() {
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    bloodGroup: '',
    mobileNumber: '',
    address: '',
    age: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const id = Date.now();

    const donor = { ...donorInfo, id };

    dispatch(addDonor(donor));

    setDonorInfo({
      name: '',
      bloodGroup: '',
      mobileNumber: '',
      address: '',
      age: '',
    });
  };

  return (
    <div className='add'>
      <form id='addform'>
      <h2>Add Donor</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={donorInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={donorInfo.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bloodGroup">Blood Group:</label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            value={donorInfo.bloodGroup}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={donorInfo.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={donorInfo.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <button type="button" onClick={handleSubmit}>
          Add Donor
        </button>
      </form>
    </div>
  );
}

export default AddDonor;