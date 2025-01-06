export class LoginPagePO {
  interactors = {
    email: "",
    password: "",
    submit: "",
  };

  assertions = {
    successMessage: "",
    errorMessage: "",
  };

  enterEmail(email) {
    cy.get(this.interactors.email).type(email);
  }
  enterPassword(password) {
    cy.get(this.interactors.password).type(password);
  }
  clickLogin() {
    cy.get(this.interactors.submit).click();
  }
  assertSuccessMessage() {
    cy.get(this.assertions.successMessage).should("exist");
  }
  assertErrorMessage() {
    cy.get(this.assertions.errorMessage).should("exist");
  }
  assertButtonDisabled() {
    cy.get(this.interactors.submit).should("be.disabled");
  }

  loginUser(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}
