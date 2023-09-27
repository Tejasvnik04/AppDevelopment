import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteDonor } from '../features/donorsSlice';
import './Donor.css';

function DonorList() {
  const donors = useSelector((state) => state.donors);
  const dispatch = useDispatch();

  const handleDelete = (donor) => {
    dispatch(deleteDonor(donor));
  };

  return (
    <div className='list'><br></br>
      <h2>Donor List</h2>
      <table id='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.mobileNumber}</td>
              <td>{donor.address}</td>
              <td>{donor.age}</td>
              <td>
                <button onClick={() => handleDelete(donor)}><i className="fas fa-trash-alt"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DonorList;