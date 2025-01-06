export class DashboardPO {
  interactors = {
    userGreeting: "",
    profileLink: "",
    logoutButton: "",
    welcomeMessage: "",
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
