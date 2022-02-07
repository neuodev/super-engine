// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("fillLoginForm", (username, password) => {
  cy.get('a[data-target="#logInModal"]').click();
  cy.get("#loginusername").type(username, {
    force: true,
  });
  cy.get("#loginpassword").type(password, {
    force: true,
  });
});

Cypress.Commands.add("login", (username, password) => {
  cy.fillLoginForm(username, password);
  cy.get("#logInModal .btn-primary").click({ force: true });
  cy.get("a[id=nameofuser]").should("have.text", `Welcome ${username}`);
});

Cypress.Commands.add("fillSignUpForm", (username, password) => {
  cy.get("#signin2").click();
  cy.wait(1000);
  cy.get("#sign-username").type(username);
  cy.get("#sign-password").type(password);
});

Cypress.Commands.add("signup", (username, password) => {
  cy.fillSignUpForm(username, password);
  cy.get("#signInModal .btn-primary").click({ force: true });
});
