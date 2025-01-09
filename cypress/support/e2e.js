import "./commands";
// import("cypress-mochawesome-reporter/register");
import "allure-cypress";

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
