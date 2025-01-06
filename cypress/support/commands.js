import { HomePagePO } from "../pages/homepage";
import { LoginPagePO } from "../pages/login";

const homePagePO = new HomePagePO();
const loginPagePO = new LoginPagePO();

Cypress.Commands.add("login", (email, password) => {
  cy.log("Performing login...");
  loginPagePO.enterEmail(email);
  loginPagePO.enterPassword(password);
  loginPagePO.clickLogin();
});

Cypress.Commands.add("sessionLogin", (email, password) => {
  cy.session([email, password], () => {
    cy.log("Navigating to login via homepage...");
    homePagePO.openURL();
    homePagePO.clickSignIn();
    cy.login(email, password);
  });
});
