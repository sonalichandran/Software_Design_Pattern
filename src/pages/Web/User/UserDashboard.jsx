import React, { useState } from 'react';

const UserDashboard = () => {
  const [username, setUsername] = useState('John Doe');
  const [address, setAddress] = useState('2/342 XXX, YYY, ZZZ');
  const [dob, setDob] = useState('2005-01-01');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleSaveChanges = () => {

    alert('Changes saved!');
  };

  const handleCancel = () => {

    alert('Changes cancelled!');
  };

  return (
    <>
      <p className="text-center font-bold pt-8 pl-80 text-lg flex">Update Your Profile to Keep Engaged</p>
    <div className="w-screen pt-16 pl-64 flex">
      <div className="w-full max-w-md p-6 shadow-md shadow-slate-400 rounded-md flex-col flex bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">User Details</h2>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Username</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Address</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Phone Number</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="w-32 text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSaveChanges}
            className="mt-4 w-1/2 mr-2 p-2 bg-slate-600 text-white rounded-md"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="mt-4 w-1/2 ml-2 p-2 bg-gray-400 text-white rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIJPaTnmKB5meJwH-FTpp5YeEEkFhvnLuNA&s" alt></img> */}
      <div className="pl-32 gap-3 flex-col flex">

      <p className=" pt-28 flex text-9xl ">🐱</p>
      <p className="text-lg font-bold">Your profile, your preferences,</p>
        <p className="text-lg font-bold"> your perfect shopping experience.</p>
    </div>
      </div>
    </>
  );
};

export default UserDashboard;
