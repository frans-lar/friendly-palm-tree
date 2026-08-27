import { APIRequestContext } from '@playwright/test';   

interface Student {
  name: string;
  age: string;
  grade: string;
}

interface AddStudentResponse {
  status: string;
  student_id: number;
}

interface GetStudentsResponse {
  id: number;
  name: string;
  age: string;
  grade: string;
  createdDate: string;
  updatedDate: string;
}

export class API {
  constructor(private request: APIRequestContext) {}

  async getStudents(): Promise<GetStudentsResponse[]> {
    const response = await this.request.get('/student');
    return await response.json();   
}
 async addStudent(studentData: Student): Promise<AddStudentResponse> {
    const response = await this.request.post('/student', { data: studentData });
    return await response.json();   
}


}