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



/*
test('hämtar studenter', async ({ request}) => {
    const api = new API(request);

    const students = await api.getStudents();
    expect(students.length).toBeGreaterThan(0);
  
});

*/