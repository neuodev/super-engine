/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";
describe("Cart", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Add product to the cart", () => {
    cy.addToCard();
  });

  it.only("Remove product from the cart", () => {
    cy.addToCard();
    cy.get("#cartur").click();
    cy.get("#tbodyid > tr").should("have.length", 1);
  });

  it("Place an order", () => {});
});
