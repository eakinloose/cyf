import { HomePagePO } from "../../pages/homepage";
import { LoginPagePO } from "../../pages/login";
import testData from "../../fixtures/testData.json";

const homePagePO = new HomePagePO();
const loginPagePO = new LoginPagePO();

describe("Login Suite", () => {
  beforeEach(() => {
    homePagePO.openURL();
    homePagePO.clickSignIn();
  });

  it("should log in successfully with valid credentials", () => {
    loginPagePO.enterEmail(testData.email);
    loginPagePO.enterPassword(testData.password);
    loginPagePO.clickLogin();
    loginPagePO.assertSuccessMessage();
  });

  it("should display an error message with invalid credentials", () => {
    loginPagePO.enterEmail(testData.invalidEmail);
    loginPagePO.enterPassword(testData.invalidPassword);
    loginPagePO.clickLogin();
    loginPagePO.assertErrorMessage();
  });
});
