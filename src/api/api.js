// frontend/src/api.js
import axios from 'axios';

export const requestMagicLink = async (email) => {
  try {
    const res = await axios.post('http://localhost:5001/api/auth/request-magic-link', { email });
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
