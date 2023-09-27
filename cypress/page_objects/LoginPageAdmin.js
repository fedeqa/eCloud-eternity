class LoginPageAdmin {
  //Navegación
  visit() {
    cy.visit("http://admin.uat.eternity.ecloudsolutions.mx/auth/login");
    cy.wait(3000);
    cy.url().should("include", "/login");
  }

  //Acciones sobre los elementos
  validateLoginPageElements() {
    cy.get("img").should("be.visible");
    cy.get(".col-md-12 > .login-text").should(
      "have.text",
      " Experience + Innovation "
    );
    cy.get(".login-form-text").should(
      "have.text",
      " Complete with your email and password to enter your panel. "
    );
    cy.get(":nth-child(1) > .operation-item > .operation-item-name").should(
      "have.text",
      " Email "
    );
    cy.emailInput().should("be.visible").and("not.be.disabled");
    cy.get(":nth-child(2) > .operation-item > .operation-item-name").should(
      "have.text",
      " Password "
    );
    cy.passwordInput().should("be.visible").and("not.be.disabled");
    cy.get(".custom-control-label")
      .should("have.text", " Remember me")
      .should("not.be.disabled");

    // - Validar check y uncheck botón 'Remember me' - [A continuación:]
    cy.get("#rememberme").then(($element) => {
      if ($element.is(":checked")) {
        // Si está marcado, desmarcarlo
        cy.get("#rememberme").uncheck({ force: true });
      } else {
        // Si no está marcado, marcarlo
        cy.get("#rememberme").check({ force: true });
      }
    }); // Obtener el estado actual del elemento - Se utiliza {force: true} porque al elemento lo cubre un label
    cy.get("#rememberme").should(($element) => {
      // Verificar si el elemento está marcado o no
      if ($element.is(":checked")) {
        expect($element).to.be.checked;
      } else {
        expect($element).not.to.be.checked;
      }
    }); // Verificar el estado después de la acción

    cy.get(".pull-right")
      .should("not.be.disabled")
      .should("have.text", " Forgot your password? ");
    cy.iniciarSesionButton().should("have.text", "Login");
  }

  loginAsSuperAdmin() {
    cy.emailInput().click().type("superadmin@eternity.com");
    cy.passwordInput().click().type("12345678");
    cy.iniciarSesionButton().click();
    cy.url("include", "/dashboard/super_admin");
    cy.welcomeToaster().wait(3000).should("be.visible");
    cy.wait(3000);
  }

  loginAsSupervisor() {
    cy.emailInput().click().type("fede@supervisor.com");
    cy.passwordInput().click().type("ecloud123");
    cy.iniciarSesionButton().click();
    cy.url("include", "/dashboard/supervisor");
    cy.welcomeToaster().should("be.visible");
    cy.wait(3000);
    cy.get(".link-user-name").contains("Supervisor Fede Elias");
  }

  loginAsOperator() {
    cy.emailInput().click().type("fede@operador.com");
    cy.passwordInput().click().type("ecloud123");
    cy.iniciarSesionButton().click();
    cy.url("include", "/dashboard/operator");
    cy.welcomeToaster().should("be.visible");
    cy.wait(3000);
    cy.get(".link-user-name").contains("Operador Fede Elias");
  }

  loginAsCS() {
    cy.emailInput().click().type("fede@cs.com");
    cy.passwordInput().click().type("ecloud123");
    cy.iniciarSesionButton().click();
    cy.url("include", "/dashboard/customer_service");
    cy.welcomeToaster().should("be.visible");
    cy.wait(3000);
    cy.get(".link-user-name").contains("CS Fede Elias");
  }

  loginAsMarketing() {
    cy.emailInput().click().type("fede@marketing.com");
    cy.passwordInput().click().type("ecloud123");
    cy.iniciarSesionButton().click();
    cy.url("include", "/dashboard");
    cy.welcomeToaster().should("be.visible");
    cy.wait(3000);
    cy.get(".link-user-name").contains("Marketing Fede Elias");
  }

  loginAsReadOnly() {
    cy.emailInput().click().type("fede@sololectura.com");
    cy.passwordInput().click().type("ecloud123");
    cy.iniciarSesionButton().click();
    cy.url("include", "/dashboard");
    cy.welcomeToaster().should("be.visible");
    cy.wait(3000);
    cy.get(".link-user-name").contains("SoloLectura Fede Elias");
  }
}

export default LoginPageAdmin;
