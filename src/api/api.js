import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    console.log('Sending user data:', userData); // Add this line for debugging
    const res = await axios.post('http://localhost:5001/api/auth/register', userData);
    console.log(res.data);
  } catch (err) {
    console.error('Error registering user: ', err.response.data); // Update this line
    throw err;
  }
};
