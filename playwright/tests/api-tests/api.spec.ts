import { test, expect } from '@playwright/test';


test('hämtar studenter', async ({ request}) => {
    const response = await request.get('/student');
    const data = await response.json();
    console.log(data);
    expect(response.ok()).toBeTruthy();
 
    
});
