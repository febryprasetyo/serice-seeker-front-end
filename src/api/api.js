import axios from 'axios';
import { useAuth } from '../store/auth';

const baseURL = 'https://service-seeker-api.vercel.app';

const config = () => {
    const { token } = useAuth.getState(); // Get the token from your Zustand store
    return {
      headers: {
        Authorization: `${token}`,
      },
    };
  };

// Auth API functions
const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${baseURL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, loginData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const logoutUser = async () => {
  try {
    const response = await axios.post(`${baseURL}/auth/logout`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Users API functions
const getAllUsers = async (accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/users/all`, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getUserProfile = async () => {
    try {
      const response = await axios.get(`${baseURL}/users/me`, config());
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

const getUserByUsername = async (username) => {
    try {
      const response = await axios.get(`${baseURL}/users/${username}`, config());
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
};

const getUserJobs = async (username, accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/users/${username}/jobs`, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const updateUserProfile = async (username, userData, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/users/${username}`, userData, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const changeUserPassword = async (username, passwordData, accessToken) => {
  try {
    const response = await axios.put(
      `${baseURL}/users/${username}/change-password`,
      passwordData,
      {
        headers: { Authorization: accessToken },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const uploadProfileImage = async (username, imageData, accessToken) => {
  try {
    const formData = new FormData();
    formData.append('profileImage', imageData);

    const response = await axios.post(
      `${baseURL}/users/${username}/upload-profile-image`,
      formData,
      {
        headers: {
          Authorization: accessToken,
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Jobs API functions
const getAllJobs = async (status, sort, category, page) => {
  try {
    const response = await axios.get(`${baseURL}/jobs/all`, {
      params: { status, sort, category, page },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getJobById = async (jobId) => {
  try {
    const response = await axios.get(`${baseURL}/jobs/detail/${jobId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const createJob = async (jobData, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/jobs/create`, jobData, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const applyForJob = async (jobId, accessToken) => {
  try {
    const response = await axios.post(
      `${baseURL}/jobs/${jobId}/apply`,
      {},
      {
        headers: { Authorization: accessToken },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const searchJobs = async (queryParams) => {
  try {
    // Convert the object of query parameters to a string
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');

    // Append the query string to the base URL
    const url = `${baseURL}/jobs/search?${queryString}`;

    // Make the request using the modified URL
    const response = await axios.get(url, config());

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const updateJob = async (jobId, jobData, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/jobs/${jobId}`, jobData, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const markJobAsFinish = async (jobId, accessToken) => {
  try {
    const response = await axios.put(`${baseURL}/jobs/${jobId}/finish`, {}, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const deleteJob = async (jobId, accessToken) => {
  try {
    const response = await axios.delete(`${baseURL}/jobs/${jobId}`, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Reviews API functions
const addReview = async (reviewData, accessToken) => {
  try {
    const response = await axios.post(`${baseURL}/reviews/add`, reviewData, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

const getUserReviews = async (accessToken) => {
  try {
    const response = await axios.get(`${baseURL}/reviews/jobseeker`, {
      headers: { Authorization: accessToken },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Count Jobs by Category
const countJobsByCategory = async () => {
  try {
    const response = await axios.get(`${baseURL}/jobs/countByCategory`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export {
  registerUser,
  loginUser,
  logoutUser,
  getAllUsers,
  getUserProfile,
  getUserByUsername,
  getUserJobs,
  updateUserProfile,
  changeUserPassword,
  uploadProfileImage,
  getAllJobs,
  getJobById,
  createJob,
  applyForJob,
  searchJobs,
  updateJob,
  markJobAsFinish,
  deleteJob,
  addReview,
  getUserReviews,
  countJobsByCategory,
};
