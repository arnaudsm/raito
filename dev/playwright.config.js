import { test as base, defineConfig } from '@playwright/test';

const test = base.extend({
  baseUrl: [null, { option: true }],
  prefix: ["", { option: true }],
});

export { test }

export default defineConfig({
  webServer: {
    command: 'yarn start',
    url: 'http://localhost:3001',
    stderr: 'pipe',
  },
  // Raito supports hash routing and star routing, we will test both
  projects: [
    {
      name: "star",
      use: {
        baseUrl: "http://localhost:3001",
      },
    },
    {
      name: "hash",
      use: {
        baseUrl: "http://localhost:3000/#",
        prefix: "/#"
      },
    }
  ]
});
