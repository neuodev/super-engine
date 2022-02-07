/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";
const VALID_USER = {
  username: "greenland",
  password: "123456",
};

describe("Login/logut process", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should be able to login with valid credentials", () => {
    cy.login(VALID_USER.username, VALID_USER.password);
  });

  it("Show alert for invalid user name", () => {
    cy.fillLoginForm("__Invalid_user_name", "password");
    cy.get("#logInModal .btn-primary").click({ force: true });
    cy.on("window:alert", (txt) => {
      expect(txt).to.eq("User does not exist.");
    });
  });

  it("Show alert for invalid user password", () => {
    cy.fillLoginForm(VALID_USER.username, "password");
    cy.get("#logInModal .btn-primary").click({ force: true });
    cy.on("window:alert", (txt) => {
      expect(txt).to.eq("Wrong password.");
    });
  });

  it("Should be able to logout after successful login", () => {
    cy.login(VALID_USER.username, VALID_USER.password);
    cy.get("#logout2").should("exist");
    cy.get("#logout2").click();
    cy.get("#logout2").should("not.be.visible");
    cy.get("#login2").should("exist");
  });
});
