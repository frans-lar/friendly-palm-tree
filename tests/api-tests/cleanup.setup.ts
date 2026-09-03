import { test as setup, expect } from '@playwright/test';
import { API } from '../../API/api';

setup('Rensar alla studenter innan tester och väcker servern', async ({ request }) => {
    const api = new API(request);
    await expect(async () => {
    await api.getStudents();
  }).toPass({ timeout: 60000, intervals: [2000, 5000, 10000] });


    await api.deleteAllStudents();

});


