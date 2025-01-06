import { HomePagePO } from "../../pages/homepage";
import { RegisterPagePO } from "../../pages/register";
import testData from "../../fixtures/testData.json";

const homePagePO = new HomePagePO();
const registerPO = new RegisterPagePO();

describe("Register Suite", () => {
  it("should successfully register with valid data", () => {
    homePagePO.openURL();
    homePagePO.clickGetStarted();

    registerPO.enterFirstName(testData.firstName);
    registerPO.enterlastName(testData.lastName);
    registerPO.enterEmail(testData.email);
    registerPO.enterTelephone(testData.phoneNumber);
    registerPO.enterPassword(testData.password);
    registerPO.enterConfirmPassword(testData.confirmPassword);
    registerPO.selectCheckbox();
    registerPO.clickOnContinue();

    registerPO.assertSuccessMessage();
  });

  it("should show an error when first name is missing", () => {
    homePagePO.openURL();
    homePagePO.clickGetStarted();

    registerPO.enterlastName(testData.lastName);
    registerPO.enterEmail(testData.email);
    registerPO.enterTelephone(testData.phoneNumber);
    registerPO.enterPassword(testData.password);
    registerPO.enterConfirmPassword(testData.confirmPassword);
    registerPO.selectCheckbox();
    registerPO.clickOnContinue();

    registerPO.assertErrorMessage();
  });

  it("should show an error when passwords do not match", () => {
    homePagePO.openURL();
    homePagePO.clickGetStarted();

    registerPO.enterFirstName(testData.firstName);
    registerPO.enterlastName(testData.lastName);
    registerPO.enterEmail(testData.email);
    registerPO.enterTelephone(testData.phoneNumber);
    registerPO.enterPassword(testData.password);
    registerPO.enterConfirmPassword("differentPassword123");
    registerPO.selectCheckbox();
    registerPO.clickOnContinue();

    registerPO.assertErrorMessage();
  });

  it("should show an error when email is invalid", () => {
    homePagePO.openURL();
    homePagePO.clickGetStarted();

    registerPO.enterFirstName(testData.firstName);
    registerPO.enterlastName(testData.lastName);
    registerPO.enterEmail("invalidemail");
    registerPO.enterTelephone(testData.phoneNumber);
    registerPO.enterPassword(testData.password);
    registerPO.enterConfirmPassword(testData.confirmPassword);
    registerPO.selectCheckbox();
    registerPO.clickOnContinue();

    registerPO.assertErrorMessage();
  });

  it("should show an error when the terms checkbox is not checked", () => {
    homePagePO.openURL();
    homePagePO.clickGetStarted();

    registerPO.enterFirstName(testData.firstName);
    registerPO.enterlastName(testData.lastName);
    registerPO.enterEmail(testData.email);
    registerPO.enterTelephone(testData.phoneNumber);
    registerPO.enterPassword(testData.password);
    registerPO.enterConfirmPassword(testData.confirmPassword);
    registerPO.clickOnContinue();

    registerPO.assertErrorMessage();
  });
});
