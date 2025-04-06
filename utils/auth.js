import axios from "axios";

export const verifyToken = async (token) => {
  try {
    const res = await axios.post("https://f-backend-l4sd.vercel.app/api/verify-token", { token });
    return res.data;
  } catch (error) {
    return null;
  }
};
