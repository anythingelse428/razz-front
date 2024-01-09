import axios from 'axios';

export interface ICreateHumanPayload {
  name:string
}
export async function apiExamCreateTeacher(props:ICreateHumanPayload) {
  return await axios.post('http://localhost:35729/teacher/createTeacher/', { ...props });
}
