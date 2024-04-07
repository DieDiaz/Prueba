import axios from 'axios';

export const createxamrequest = async (exam) => {
   await axios.post('http://localhost:4000/exam',exam)
};