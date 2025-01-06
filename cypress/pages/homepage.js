export class HomePagePO {
  interactors = {
    getStartedButton: "",
    signInButton: "",
    contactUsLink: "",
    aboutUsLink: "",
    searchInput: "",
    searchButton: "",
    featuredSection: "",
  };

  assertions = {
    pageTitle: "",
    featuredSectionVisible: "",
  };

  openURL() {
    cy.visit("/");
  }
  clickGetStarted() {
    cy.get(this.interactors.getStartedButton).click();
  }
  clickSignIn() {
    cy.get(this.interactors.signInButton).click();
  }
  clickContactUs() {
    cy.get(this.interactors.contactUsLink).click();
  }
  clickAboutUs() {
    cy.get(this.interactors.aboutUsLink).click();
  }
  searchForItem(searchTerm) {
    cy.get(this.interactors.searchInput).type(searchTerm);
    cy.get(this.interactors.searchButton).click();
  }
  assertPageTitle(expectedTitle) {
    cy.title().should("eq", expectedTitle);
  }
  assertFeaturedSectionVisible() {
    cy.get(this.interactors.featuredSection).should("be.visible");
  }
  assertButtonDisabled(buttonSelector) {
    cy.get(buttonSelector).should("be.disabled");
  }
}
