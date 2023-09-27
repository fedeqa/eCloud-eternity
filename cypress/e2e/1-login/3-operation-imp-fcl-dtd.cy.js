import ModulesPageAdmin from "../../page_objects/ModulesPageAdmin";

const modulesPageAdmin = new ModulesPageAdmin();

describe("Login y cookies", () => {
  // - Es necesario ajustar la resolución para que se visualice el sidebar, previniendo errores -
  beforeEach(() => {
    cy.viewport(1024, 768);
  });

  it("Flujo operación IMP - FCL - DTD", () => {
    // - Llamar al comando 'loginSuperAdmin' para loguearse como SuperAdmin en Panel Admin - Entorno UAT -
    cy.loginSuperAdmin();

    // - Verificar que el menú desplegable izquierdo se desplace -
    cy.get(".logo").trigger("mouseover").should("be.visible");

    // - Ingresar a 'Operaciones' -
    cy.get(".ft-settings").as("operacionesButton").click();

    // - Validar endpoint 'operation/list' -
    cy.url("include", "/operation/list");

    // - Validar visualización Filtros en Operaciones -
    modulesPageAdmin.operationFilters();

    // - Pestañas del Listado de Operaciones -
    modulesPageAdmin.operationTabs();

    // - Crear Nueva Operación -
    modulesPageAdmin.newOperationCreate();

    // - Agregar Operación -
    modulesPageAdmin.addOperationFormElements();
    modulesPageAdmin.addOperation();
    cy.wait(5000);

    // - Detalle de la Operación -
    modulesPageAdmin.detailOperation();

    //  - Colocar Tracks -
    modulesPageAdmin.addTracks();
    cy.wait(8000);

    //  - Cambiar Status -
    modulesPageAdmin.changeStatus();

    //  - Eliminar Operación de prueba -
    modulesPageAdmin.deleteOperation();
  });
});
