const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 100000,
  e2e: {
    downloadsFolder: "cypress/downloads",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },

    baseUrl: "https://altconnect-qa.sterlingapps.p.azurewebsites.net",
    viewportWidth: 1440,
    viewportHeight: 950,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Cypress test report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    retries: {
      runMode: 0,
      openMode: 0,
    },
    env: {},
  },
});
