import axios from 'axios';

export interface ICreateExamPayload {
  teacher:number
  student:number
  name:string
}
export async function apiExamCreateExam(props:ICreateExamPayload) {
  return await axios.post('http://localhost:35729/exam/createExam/');
}
