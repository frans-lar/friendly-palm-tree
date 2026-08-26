import { test, expect } from '@playwright/test';
import { API } from '../../API/api';

test('Lägger till en student', async ({ request}) => {
    const api = new API(request);

    const response = await api.addStudent({
        name: 'Test Frasse',
        age: '33',
        grade: 'A',
    });
    expect(response.ok()).toBeTruthy();
}); 



test('hämtar studenter', async ({ request}) => {
    const api = new API(request);

    const response = await api.getStudents();
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
 
    
});