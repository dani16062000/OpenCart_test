const { defineConfig } = require("cypress");
const {allureCypress} = require("allure-cypress/reporter")
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  require('cypress-mochawesome-reporter/plugin')(on);
  allureCypress(on, {
    resultsDir: "./allure-results"
  });
  
  return config;
}
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions:{
    charts:true,
    reportPageTitle:'report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'http://opencart.abstracta.us',
    setupNodeEvents,
    specPattern: "cypress/e2e/features/**/*.feature",
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080
    },
});
