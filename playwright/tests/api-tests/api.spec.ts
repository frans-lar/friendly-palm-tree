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