import axios from "axios";
const API_URL = 'http://localhost:3004/resumes';
const USER_ID = 1;

const addExperience = (data) => {
    axios.put(`${API_URL}/${USER_ID}`, data)
}


export {addExperience}