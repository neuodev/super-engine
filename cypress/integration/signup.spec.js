/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";

describe.only("Sign up process", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should be able to sign up with non existing username and password", () => {
    cy.get("#signin2").click();
    cy.wait(1000);
    const random = Math.floor(Math.random() * 1000);
    const user = `__USER__${random}`;
    const password = "123456";
    cy.get("#sign-username").type(user);
    cy.get("#sign-password").type(password);
    cy.get("#signInModal .btn-primary").click({ force: true });
    cy.login(user, password);
  });
});
