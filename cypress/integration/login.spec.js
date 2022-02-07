/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";

describe("Login process", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Should be able to login with valid credentials", () => {
    cy.get('a[data-target="#signInModal"]').click();
  });
});
