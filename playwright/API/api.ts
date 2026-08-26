import { APIRequestContext } from '@playwright/test';   

interface Student {
  name: string;
  age: string;
  grade: string;
}

export class API {
  constructor(private request: APIRequestContext) {}

  async getStudents() {
    const response = await this.request.get('/student');
    return response;   
}
 async addStudent(studentData: Student) {
    const response = await this.request.post('/student', { data: studentData });
    return response;   
}


}