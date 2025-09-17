import { defineConfig } from 'cypress';
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://automationexercise.com',
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
  },
})