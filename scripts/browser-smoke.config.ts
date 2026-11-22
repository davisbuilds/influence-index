import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';
import { browserUse } from './browser-runtime.cjs';

// WHY: exercises the real project, browser and globalSetup wiring without app or
// DB state, so no web server starts.
export default defineConfig({
  testDir: path.resolve('scripts'),
  testMatch: 'browser-runtime.spec.ts',
  webServer: undefined,
  globalSetup: path.resolve('scripts/browser-runtime.cjs'),
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'], ...browserUse } }],
  retries: 0,
  reporter: 'list',
});
