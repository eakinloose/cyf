export class DashboardPO {
  interactors = {
    userGreeting: ".transaction-chart > .mb-15",
    profileLink: ".transaction-chart > .mb-15",
    logoutButton: ".lg:tw-flex.tw-cursor-pointer.tw-hidden.tw-items-center",
    welcomeMessage: ".transaction-chart > .mb-15",
  };

  assertions = {
    welcomeMessageText: "",
  };

  checkUserGreeting() {
    cy.get(this.interactors.userGreeting).should("be.visible");
  }
  checkProfileLink() {
    cy.get(this.interactors.profileLink).should("be.visible");
  }
  checkLogoutButton() {
    cy.get(this.interactors.logoutButton).should("be.visible");
  }
  assertWelcomeMessage() {
    cy.get(this.interactors.welcomeMessage).should(
      "contain.text",
      this.assertions.welcomeMessageText
    );
  }
  logout() {
    cy.get(this.interactors.logoutButton).click();
  }
}
