import { test, expect } from '@playwright/test';
import { API } from '../../API/api';

test('Lägger till en student', async ({ request}) => {
    const api = new API(request);

    const response = await api.addStudent({
        name: 'Test Frasse',
        age: '33',
        grade: 'A',
    });
    const students = await api.getStudents();
    const addedStudent = students.find(student => student.id === response.student_id);
    expect(addedStudent).toBeDefined();
    expect(addedStudent?.name).toBe('Test Frasse');
    expect(addedStudent?.age).toBe('33');
    expect(addedStudent?.grade).toBe('A');
}); 



test('Uppdaterar en student', async ({ request}) => {
    const api = new API(request);

    const response = await api.addStudent({
        name: 'Test Hasse',
        age: '33',
        grade: 'B',
    });
    const students = await api.getStudents();
    const addedStudent = students.find(student => student.id === response.student_id);
    await api.updateStudent(addedStudent!.id, {
        name: 'Test Brasse',
        age: '33',
        grade: 'C',
    });
    const updatedStudents = await api.getStudents();
    const updatedStudent = updatedStudents.find(student => student.id === addedStudent!.id);

    expect(addedStudent).toBeDefined();
    expect(updatedStudent?.name).toBe('Test Brasse');
    expect(updatedStudent?.age).toBe('33');
    expect(updatedStudent?.grade).toBe('C');
}); 

test('Tar bort en student', async ({ request}) => {
        const api = new API(request);

    const response = await api.addStudent({
        name: 'Test Masse',
        age: '40',
        grade: 'B',
    });
    const students = await api.getStudents();
    const addedStudent = students.find(student => student.id === response.student_id);
    expect(addedStudent).toBeDefined();

    await api.deleteStudent(addedStudent!.id);
    const getStudents = await api.getStudents();
    const deletedStudent = getStudents.find(student => student.id === addedStudent!.id);

    expect(deletedStudent).toBeUndefined();



}); 
const students = [
  { name: 'Test Frasse', age: '33', grade: 'A' },
  { name: 'Test Hasse', age: '50', grade: 'B' },
  { name: 'Test Lisa', age: '25', grade: 'C' },
  { name: 'Test Anna', age: '28', grade: 'A' },
  { name: 'Test Erik', age: '31', grade: 'B' },
  { name: 'Test Sofia', age: '22', grade: 'A' },
  { name: 'Test Johan', age: '45', grade: 'C' },
  { name: 'Test Maria', age: '19', grade: 'B' },
  { name: 'Test Karl', age: '38', grade: 'A' },
  { name: 'Test Emma', age: '27', grade: 'D' },
  { name: 'Test Oskar', age: '34', grade: 'B' },
  { name: 'Test Julia', age: '23', grade: 'A' },
  { name: 'Test Anders', age: '41', grade: 'C' },
  { name: 'Test Linnea', age: '29', grade: 'B' },
  { name: 'Test Gustav', age: '36', grade: 'A' },
  { name: 'Test Ida', age: '24', grade: 'C' },
  { name: 'Test Peter', age: '47', grade: 'B' },
  { name: 'Test Elin', age: '26', grade: 'A' },
  { name: 'Test Viktor', age: '39', grade: 'D' },
  { name: 'Test Sara', age: '21', grade: 'B' },
];

for (const student of students) {

  test(`Lägger till student: ${student.name}`, async ({ request }) => {
    const api = new API(request);
    const response = await api.addStudent(student);
    const allStudents = await api.getStudents();
    const addedStudent = allStudents.find((s) => s.id === response.student_id);

    expect(addedStudent).toBeDefined();
    expect(addedStudent?.name).toBe(student.name);
    expect(addedStudent?.age).toBe(student.age);
    expect(addedStudent?.grade).toBe(student.grade);
  
  });
}

