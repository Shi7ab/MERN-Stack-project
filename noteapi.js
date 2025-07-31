import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/notes';

export const getNotes = () => axios.get(`${API_BASE_URL}/getuser`);

export const createNote = (noteData) =>
  axios.post(`${API_BASE_URL}/creatuser`, noteData);
