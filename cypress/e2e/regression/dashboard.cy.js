import { DashboardPO } from "../../pages/dashboard";
import { HomePagePO } from "../../pages/homepage";

import testData from "../../fixtures/testData.json";

const dashboardPO = new DashboardPO();
const homePagePO = new HomePagePO();

describe("Dashboard Suite", () => {
  beforeEach(() => {
    cy.sessionLogin(testData.email, testData.password);
    homePagePO.openURL();
  });

  it("should display the user's greeting on the dashboard", () => {
    dashboardPO.checkUserGreeting();
  });

  it("should have a visible profile link", () => {
    dashboardPO.checkProfileLink();
  });

  it("should show a logout button", () => {
    dashboardPO.checkLogoutButton();
  });

  it("should display the correct welcome message", () => {
    dashboardPO.assertWelcomeMessage();
  });

  it("should log out the user successfully", () => {
    dashboardPO.logout();
  });
});
