import axios from 'axios';

export async function apiStudentsGetStudent() {
  return await axios.get('http://localhost:35729/student/students');
}
