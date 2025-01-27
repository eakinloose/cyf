import "./commands";
import("cypress-mochawesome-reporter/register");
require("dotenv").config();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
