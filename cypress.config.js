const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    downloadsFolder: "cypress/downloads",
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: "https://altconnect-qa.sterlingapps.p.azurewebsites.net",
    viewportWidth: 1440,
    viewportHeight: 950,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    env: {},
  },
});
