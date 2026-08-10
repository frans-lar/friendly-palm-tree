# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: firstTests.test.ts >> har en  titel
- Location: tests\firstTests.test.ts:3:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Demo Web Shop"
Received: ""

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
  - 

```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 | 
  3 | test('har en  titel', ({ page }) => {
  4 |   page.goto('https://demowebshop.tricentis.com/');
  5 | 
  6 |   // Expect a title "to contain" a substring.
> 7 |   expect(page).toHaveTitle("Demo Web Shop");
    |                ^ Error: expect(page).toHaveTitle(expected) failed
  8 | });
  9 | 
```