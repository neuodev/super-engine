/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";
describe("Homepage content", () => {
  beforeEach(() => {
    cy.visit(URL);
    cy.fixture("products").then((products) => {
      console.log(products);
      cy.intercept("/entries", products);
    });
  });

  it("Procusts counts should be 9", () => {
    cy.get(".card").should("have.length", 9);
  });

  it.only("Check product card content", () => {});
});
