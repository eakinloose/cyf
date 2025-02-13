export class HomePagePO {
  interactors = {
    getStartedButton:
      "[class='tw-text-sm alt-btn tw-rounded btn-purple tw-w-52 mt-6'] [class]",
    signInButton: ".btn-light-purple.tw-rounded",
    contactUsLink: "",
    aboutUsLink: "",
    searchInput: "",
    searchButton: "",
    featuredSection: "#about-altconnect",
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
