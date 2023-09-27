import LoginPageAdmin from "../../page_objects/LoginPageAdmin";
import ModulesPageAdmin from "../../page_objects/ModulesPageAdmin";

const loginPageAdmin = new LoginPageAdmin();
const modulesPageAdmin = new ModulesPageAdmin();

describe("Recorrer módulos con distintos tipos de Usuarios - Panel Admin", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
    loginPageAdmin.visit();
  });

  it("Recorrer y visualizar los módulos como User: SuperAdmin", () => {
    loginPageAdmin.loginAsSuperAdmin();
    // - Entrar a 'Mi Perfil' y verificar que es el usuario logueado correspondiente - [A continuación:]
    cy.get("#dropdownBasic3").as("dropdownMiPerfil").click();
    cy.get(".nav-item.show > .dropdown-menu > .py-1").as("miPerfil").click();
    cy.url("include", "/operator/profile");
    cy.get(".ng-input > input").as("dropdownRol").click();
    cy.get(".ng-star-inserted").contains("Super Admin");
  });

  it("Recorrer y visualizar los módulos como User: Supervisor", () => {
    loginPageAdmin.loginAsSupervisor();
    modulesPageAdmin.dashboardModule();
    modulesPageAdmin.dashboardModule();
    modulesPageAdmin.statisticsModule();
    modulesPageAdmin.catalogsUsersProfilesModule();
    modulesPageAdmin.catalogsUsersOperatorsModule();
    modulesPageAdmin.catalogsOperatingParametersOperationTypesModule();
    modulesPageAdmin.catalogsOperatingParametersProductsModule(); //Usa el endpoint 'shipping-method'
    modulesPageAdmin.catalogsOperatingParametersServicesModule(); //Usa el endpoint 'operation-subtype'
    modulesPageAdmin.catalogsOperatingParametersIncidencesModule();
    modulesPageAdmin.catalogsOperatingActorsAgentsModule();
    modulesPageAdmin.catalogsOperatingActorsAirlinesModule();
    modulesPageAdmin.catalogsOperatingActorsForeignCompaniesModule();
    modulesPageAdmin.catalogsOperatingActorsPortsModule();
    modulesPageAdmin.catalogsOperatingActorsProvidersModule();
    modulesPageAdmin.catalogsOperatingActorsShippingCompanyModule();
    modulesPageAdmin.catalogsOperatingActorsShippingServiceModule();
    modulesPageAdmin.catalogsOperatingActorsTruckersModule();
    modulesPageAdmin.catalogsOperatingActorsVesselsModule();
    modulesPageAdmin.catalogsTerritorialOrganizationCountryModule();
    modulesPageAdmin.catalogsTerritorialOrganizationStateModule();
    modulesPageAdmin.catalogsTerritorialOrganizationMunicipalityModule();
    modulesPageAdmin.catalogsTerritorialOrganizationLocalityModule();
    modulesPageAdmin.catalogsTerritorialOrganizationTownshipModule();
    modulesPageAdmin.catalogsTerritorialOrganizationZipcodeModule();
    modulesPageAdmin.catalogsFaqsModule();
    modulesPageAdmin.catalogsCurrencyModule();
    modulesPageAdmin.clientsGroupModule();
    modulesPageAdmin.clientsClientModule();
    modulesPageAdmin.clientsBusinessUnitModule();
    modulesPageAdmin.clientsPlantModule();
    modulesPageAdmin.clientsStorageModule();
    modulesPageAdmin.formTemplatesModule();
    modulesPageAdmin.operationListModule();
    modulesPageAdmin.reportCreateModule();
    modulesPageAdmin.reportListModule();
    modulesPageAdmin.marketingReleaseModule();
    modulesPageAdmin.marketingNewsModule();
  });

  it("Recorrer y visualizar los módulos como User: Operador", () => {
    loginPageAdmin.loginAsOperator();
  });

  it("Recorrer y visualizar los módulos como User: CS", () => {
    loginPageAdmin.loginAsCS();
  });

  it("Recorrer y visualizar los módulos como User: Marketing", () => {
    loginPageAdmin.loginAsMarketing();
  });

  it("Recorrer y visualizar los módulos como User: Sólo Lectura", () => {
    loginPageAdmin.loginAsReadOnly();
  });
});
