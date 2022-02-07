/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";

describe.only("Sign up process", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should be able to sign up with non existing username and password", () => {
    cy.get("#signin2").click();
    const random = Math.floor(Math.random() * 1000);
    const username = "_user" + random;
    const password = "123456";
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
    cy.get("#signInModal .btn-primary").click();
    cy.login(username, password);
  });
});
