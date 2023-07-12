import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Run the local dev server before starting the tests
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:8000',
    stderr: 'pipe',
  },
  use :{
    baseURL: 'http://localhost:8000',
  }
});
