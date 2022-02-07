/// <reference types="cypress" />

const URL = "https://www.demoblaze.com/index.html";
describe("Homepage content", () => {
  beforeEach(() => {
    cy.visit(URL);
  });

  it("Procusts counts should be 9", () => {
    cy.get(".card").should("have.length", 9);
  });

  it("Check product card content", () => {
    cy.fixture("products").then((products) => {
      cy.intercept("/entries", products);
    });
    cy.get(".card:first-child")
      .get('img[src="imgs/galaxy_s6.jpg"]')
      .should("exist");
    cy.get(".card:first-child").contains("Samsung galaxy s6").should("exist");
    cy.get(".card:first-child").contains("$360").should("exist");
    cy.get(".card:first-child")
      .contains(
        "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos"
      )
      .should("exist");
  });
});
