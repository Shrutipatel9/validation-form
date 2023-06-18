import React, { useState } from 'react';
import ValidationDetailsPage from './ValidationDetailsPage';
import './ValidationPage.css'; // Import the CSS file for styling




const ValidationPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phnumber:'',
    aadhar:'',
    location:'',
    // Add more fields as per your requirement
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation logic here
    setIsSubmitted(true);
  };

  const isEmailValid = /\S+@\S+\.\S+/.test(userDetails.email);
  const isFormValid = userDetails.name && userDetails.email && isEmailValid && userDetails.phnumber && userDetails.aadhar && userDetails.location; // Add more conditions as per your requirement

  return (
    <div className="validation-page">
      {!isSubmitted ? (
        <>
        <h1 className="validation-page-title">User Details Validation</h1>
          <form onSubmit={handleSubmit} className="validation-form">
            <label className="validation-label">
              Name:
              <input className='validation-input'
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
            </label>
            <br />

            <label className="validation-label">
              Email:
              <input className='validation-input'
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
              </label>
            <br />
            <label className="validation-label">
              Phone Number:
              <input className='validation-input'
                type="text"
                name="phnumber"
                value={userDetails.phnumber}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="validation-label">
              AadharCard No.:
              <input className='validation-input'
                type="text"
                name="aadhar"
                value={userDetails.aadhar}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className="validation-label">
              Location:
              <input className='validation-input'
                type="text"
                name="location"
                value={userDetails.location}
                onChange={handleChange}
              />
            </label>
            <br />
            {/* Add more fields as per your requirement */}
            <button className="validation-button" type="submit" disabled={!isFormValid} >
              Submit
            </button>
          </form>
        </>
      ) : (
        <ValidationDetailsPage userDetails={userDetails} />
      )}
    </div>
  );
};

export default ValidationPage;
