/* eslint-disable react/prop-types */
import { useState} from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import { updateUserProfile } from '@/api/api';



const EditProfileForm = ({ onCancel, onProfileUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  // Ambil username dari localStorage
  const storedUsername = localStorage.getItem('username');
  const userData = storedUsername ? JSON.parse(storedUsername) : {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUserProfile(userData, formData);
      console.log('Profile updated successfully:', response);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
      });

      onCancel();

      // Panggil fungsi callback untuk memberi tahu komponen Dashboard bahwa profil telah diperbarui
      onProfileUpdate();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const closeModal = () => {
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
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              First Name
            </Typography>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              size="md"
              outline={true}
            />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Last Name
            </Typography>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              size="md"
              outline={true}
            />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Your Email
            </Typography>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              size="md"
              outline={true}
            />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Address
            </Typography>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              size="md"
              outline={true}
            />
          </div>
          <div className="mb-4">
            <Typography variant="small" color="blue-gray" className="mb-2 font-medium">
              Phone
            </Typography>
            <Input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              size="md"
              outline={true}
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
            >save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
