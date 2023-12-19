import React, { useState } from 'react';
import { Input } from '@material-tailwind/react';
import { Button } from '@/components';
  

const EditProfileForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call to update profile)
    console.log('Form data submitted:', formData);
    // Reset form or close modal as needed
  };

  const closeModal = () => {
    // Add logic to close the modal
    onCancel();
  };

  return (
    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div className="bg-white p-8 rounded-lg shadow-md relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer text-2xl font-bold"
          onClick={closeModal}
        >
          X
        </button>
        <div className="flex justify-center">
        <h2 className="text-2xl mb-4">Edit Profile</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              size="md"
              outline="true"
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              size="md"
              outline="true"
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              size="md"
              outline="true"
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              size="md"
              outline="true"
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              size="md"
              outline="true"
            />
          </div>
          {/* Add more form fields as needed */}
          <div className="flex justify-center">
          <Button
            type="submit"
            name={ 'Save' }
            styles={
                'w-[80px] py-2 px-2 font-poppins font-medium text-[14px] text-primary bg-blue-gradient rounded-[10px] outline-none '
              }
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
