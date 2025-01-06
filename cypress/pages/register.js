export class RegisterPagePO {
  interactors = {
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    policyCheckbox: "",
    submit: "",
  };

  assertions = {
    title: "",
    successMessage: "",
    errorMessage: "",
  };

  enterFirstName(firstName) {
    cy.get(this.interactors.firstName).type(firstName);
  }
  enterlastName(lastName) {
    cy.get(this.interactors.lastName).type(lastName);
  }
  enterEmail(email) {
    cy.get(this.interactors.email).type(email);
  }
  enterTelephone(phoneNumber) {
    cy.get(this.interactors.telephone).type(phoneNumber);
  }
  enterPassword(password) {
    cy.get(this.interactors.password).type(password);
  }
  enterConfirmPassword(confirmPassword) {
    cy.get(this.interactors.confirmPassword).type(confirmPassword);
  }
  selectCheckbox() {
    cy.get(this.interactors.policyCheckbox).check();
  }
  clickOnContinue() {
    cy.get(this.interactors.continue).click();
  }
  assertSuccessTitle() {
    cy.get(this.assertions.title).should("exist");
  }
  assertSuccessMessage() {
    cy.get(this.assertions.message).should("exist");
  }
  assertErrorMessage() {
    cy.get(this.assertions.errorMessage).should("exist");
  }
  assertButtonDisabled() {
    cy.get(this.interactors.submit).should("be.disabled");
  }

  registerUser(
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword
  ) {
    this.enterFirstName(firstName);
    this.enterlastName(lastName);
    this.enterEmail(email);
    this.enterTelephone(phoneNumber);
    this.enterPassword(password);
    this.enterConfirmPassword(confirmPassword);
    this.selectCheckbox();
    this.clickOnContinue();
  }
}
