import axios from 'axios';
import { ICreateHumanPayload } from '@/api/teacher/createTeacher';

export async function apiExamCreateStudent(props:ICreateHumanPayload) {
  return await axios.post('http://localhost:35729/student/createStudent/', { ...props });
}
