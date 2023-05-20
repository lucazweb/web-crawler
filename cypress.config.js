import { defineConfig } from 'cypress'
require('dotenv').config()

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    fixturesFolder: './tests/e2e/cypress/fixtures',
    supportFile: './tests/e2e/cypress/support/index.js',
    specPattern: './tests/e2e/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    env: {
      apiBaseUrl: process.env.API_BASE_URL,
      localStorageKey: process.env.LOCAL_STORAGE_KEY,
    },
  },
})
