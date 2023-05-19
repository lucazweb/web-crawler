import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    fixturesFolder: false,
    supportFile: './tests/e2e/cypress/support/index.js',
    specPattern: './tests/e2e/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
  },
})
