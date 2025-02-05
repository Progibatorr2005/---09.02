import axios from 'axios';

export async function getUserById(id: string): Promise<{ id: string; name: string }> {
  try {
    const response = await axios.get(`https://api.example.com/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user");
  }
}