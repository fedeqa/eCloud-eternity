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

//Comando 'loginSuperAdmin' visita Panel Admin - UAT, con credenciales de SuperAdmin
Cypress.Commands.add("loginSuperAdmin", () => {
  //Visitar entorno UAT - Pantalla Login
  cy.visit("http://admin.uat.eternity.ecloudsolutions.mx/auth/login");

  //Ingresar Email
  cy.get(":nth-child(1) > .operation-item > div > .form-control")
    .click()
    .type("superadmin@eternity.com");

  //Ingresar Password
  cy.get(":nth-child(2) > .operation-item > div > .form-control")
    .click()
    .type("12345678");

  //Click en "Iniciar Sesión"
  cy.get(".btn").click();

  //Verificar que haya logueado correctamente, verificando el endpoint y el usuario logueado
  cy.url("include", "/dashboard/super_admin");
});

//Comandos para traer Locators repetidos a las Pages
//- Locator Botón Iniciar Sesión -
Cypress.Commands.add("iniciarSesionButton", () => {
  cy.get(".btn");
});

//- Locator Input Email -
Cypress.Commands.add("emailInput", () => {
  cy.get(":nth-child(1) > .operation-item > div > .form-control");
});

//- Locator Input Password -
Cypress.Commands.add("passwordInput", () => {
  cy.get(":nth-child(2) > .operation-item > div > .form-control");
});

//- Locator Toaster de Bienvenida -
Cypress.Commands.add("welcomeToaster", () => {
  cy.get(".iziToast-icon");
});
