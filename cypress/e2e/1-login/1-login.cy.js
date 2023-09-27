import LoginPageAdmin from "../../page_objects/LoginPageAdmin";

const loginPageAdmin = new LoginPageAdmin();

describe("Pantalla Login - Panel Admin", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    loginPageAdmin.visit();
  });

  it("Validar elementos en Pantalla Login", () => {
    loginPageAdmin.validateLoginPageElements();
  });

  it("Iniciar sesión como SuperAdmin", () => {
    loginPageAdmin.loginAsSuperAdmin();
    // - Entrar a 'Mi Perfil' y verificar que es el usuario logueado correspondiente -
    cy.get("#dropdownBasic3").as("dropdownMiPerfil").click();
    cy.get(".nav-item.show > .dropdown-menu > .py-1").as("miPerfil").click();
    cy.url("include", "/operator/profile");
    cy.get(".ng-input > input").as("dropdownRol").click();
    cy.get(".ng-star-inserted").contains("Super Admin");
  });

  it("Iniciar sesión como User: Supervisor", () => {
    loginPageAdmin.loginAsSupervisor();
  });

  it("Iniciar sesión como User: Operador", () => {
    loginPageAdmin.loginAsOperator();
  });

  it("Iniciar sesión User: como CS", () => {
    loginPageAdmin.loginAsCS();
  });

  it("Iniciar sesión como User: Marketing", () => {
    loginPageAdmin.loginAsMarketing();
  });

  it("Iniciar sesión como User: Sólo Lectura", () => {
    loginPageAdmin.loginAsReadOnly();
  });
});
