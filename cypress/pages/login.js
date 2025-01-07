export class LoginPagePO {
  interactors = {
    email: ".v-form > div:nth-of-type(1) [required]",
    password: ".v-form > div:nth-of-type(2) [required]",
    submit:
      ".alt-btn.btn-purple.py-4.tw-rounded.tw-text-sm.tw-w-full > .tw-flex.tw-gap-x-2.tw-justify-center",
  };

  assertions = {
    successMessage: ".transaction-chart > .mb-15",
    errorMessage: "div[role='alert'] > .v-toast__text",
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
