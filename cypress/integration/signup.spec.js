/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";

describe("Sign up process", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Sign up new user", () => {
    const random = Math.floor(Math.random() * 1000);
    const username = `__USER__${random}`;
    const password = "123456";
    cy.signup(username, password);
    cy.login(username, password);
  });

  it.only("Click signup without filling the form", () => {
    cy.get("#signin2").click();
    cy.get("#signInModal .btn-primary").click({ force: true });
    cy.on("window:alert", (txt) => {
      expect(txt).to.be.eq("Please fill out Username and Password.");
    });
  });

  it("Register existing user", () => {
    cy.signup("greenland", "123456");
    cy.on("window:alert", (txt) => {
      expect(txt).to.be.eq("This user already exist.");
    });
  });
});
