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

interface DeleteStudentResponse {
  status: string;
  message: string;
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

  async updateStudent(studentId: number, studentData: Student): Promise<AddStudentResponse> {
    const response = await this.request.put(`/student/${studentId}`, { data: studentData });
    return await response.json();   
  } 

  async deleteStudent(studentId: number): Promise<DeleteStudentResponse> {
    const response = await this.request.delete(`/student/${studentId}`);
    return await response.json();
  }

  async deleteAllStudents(): Promise<DeleteStudentResponse> {
    const response = await this.request.delete(`/student_delete_all`);
    return await response.json();
  }
}
