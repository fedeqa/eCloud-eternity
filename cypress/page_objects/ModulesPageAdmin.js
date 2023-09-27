class ModulesAdmin {
  //Acciones sobre elementos
  dashboardModule() {}

  statisticsModule() {}

  catalogsUsersProfilesModule() {}

  catalogsUsersOperatorsModule() {}

  catalogsOperatingParametersOperationTypesModule() {}

  catalogsOperatingParametersProductsModule() {
    //Usa el endpoint 'shipping-method'
  }

  catalogsOperatingParametersServicesModule() {
    //Usa el endpoint 'operation-subtype'
  }

  catalogsOperatingParametersIncidencesModule() {}

  catalogsOperatingActorsAgentsModule() {}

  catalogsOperatingActorsAirlinesModule() {}

  catalogsOperatingActorsForeignCompaniesModule() {}

  catalogsOperatingActorsPortsModule() {}

  catalogsOperatingActorsProvidersModule() {}

  catalogsOperatingActorsShippingCompanyModule() {}

  catalogsOperatingActorsShippingServiceModule() {}

  catalogsOperatingActorsTruckersModule() {}

  catalogsOperatingActorsVesselsModule() {}

  catalogsTerritorialOrganizationCountryModule() {}

  catalogsTerritorialOrganizationStateModule() {}

  catalogsTerritorialOrganizationMunicipalityModule() {}

  catalogsTerritorialOrganizationLocalityModule() {}

  catalogsTerritorialOrganizationTownshipModule() {}

  catalogsTerritorialOrganizationZipcodeModule() {}

  catalogsFaqsModule() {}

  catalogsCurrencyModule() {}

  clientsGroupModule() {}

  clientsClientModule() {}

  clientsBusinessUnitModule() {}

  clientsPlantModule() {}

  clientsStorageModule() {}

  formTemplatesModule() {}

  operationListModule() {}

  operationFilters() {
    cy.get("app-table-filters > .card > .card-header")
      .invoke("text")
      .should("match", /^\s*Filtros disponibles\s*$/);
    cy.get(".row.ng-star-inserted > :nth-child(1) > h4")
      .invoke("text")
      .should("match", /^\s*Datos estructurales\s*$/);
    cy.get(":nth-child(2) > h4")
      .invoke("text")
      .should("match", /^\s*Estado\s*$/);
    cy.get(":nth-child(3) > h4")
      .invoke("text")
      .should("match", /^\s*Alertas\s*$/);
    cy.get(":nth-child(1) > app-input > .form-group > .form-control").should(
      "be.visible"
    ); //*Buscar por Job Reference/HBL/MBL/Booking Number/PO
    cy.get(
      ":nth-child(4) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Producto
    cy.get(
      ".col-10 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Servicio
    cy.get(
      ":nth-child(10) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Equipo
    cy.get(
      ":nth-child(13) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Cliente
    cy.get(
      ":nth-child(16) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Operación Activa/Inactiva
    cy.get(
      ":nth-child(2) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Condición
    cy.get(
      ":nth-child(5) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Estado
    cy.get("form.ng-untouched > :nth-child(2) > :nth-child(8)").should(
      "be.visible"
    ); //*Buscar por ETD
    cy.get("form.ng-untouched > :nth-child(2) > :nth-child(11)").should(
      "be.visible"
    ); //*Buscar por ETA
    cy.get(":nth-child(14) > app-input > .form-group > .form-control").should(
      "be.visible"
    ); //*Buscar por Número de Contenedor
    cy.get(
      ":nth-child(3) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Condición de Alerta
    cy.get(
      ":nth-child(6) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Tipo de Alerta
    cy.get(
      ":nth-child(9) > app-select-catalog > .select > div.ng-untouched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).should("be.visible"); //*Buscar por Factor de Desencadenamiento
    cy.get("form.ng-untouched > :nth-child(2) > :nth-child(12)").should(
      "be.visible"
    ); //*Buscar por Fecha de surgimiento
    cy.get(":nth-child(15) > app-input > .form-group > .form-control").should(
      "be.visible"
    ); //*Buscar por Nombre de la Alerta
    cy.get(".btn-secondary")
      .invoke("text")
      .should("match", /^\s*Reiniciar Búsqueda\s*$/); //*Botón 'Reiniciar Búsqueda'
    cy.get(".col-6")
      .should("not.be.disabled")
      .invoke("text")
      .should("match", /^\s*Buscar\s*$/);
    //*Botón 'Buscar'
  }

  operationTabs() {
    cy.get("#exp")
      .invoke("text")
      .should("match", /^\s*Exportación\s*$/);
    cy.get("#imp")
      .invoke("text")
      .should("match", /^\s*Importación\s*$/);
    cy.get("#oth")
      .invoke("text")
      .should("match", /^\s*Otros\s*$/);
  }

  newOperationCreate() {
    cy.get(".col-4 > .btn")
      .scrollIntoView()
      .as("nuevaOperacionButton")
      .should("have.text", " + Nueva Operación ");
    cy.get("@nuevaOperacionButton").click();
  }

  addOperationFormElements() {
    cy.get("#striped-row-layout-icons")
      .invoke("text")
      .should("match", /^\s*Agregar Operación\s*$/);
    cy.get(":nth-child(1) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Tipo de operación\s*$/);
    cy.get(":nth-child(2) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Producto\s*$/);
    cy.get(":nth-child(3) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Servicio\s*$/);
    cy.get(".form-group.ng-star-inserted > .col-md-3")
      .invoke("text")
      .should("match", /^\s*MoveType\s*$/);
    cy.get(":nth-child(5) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Cliente\s*$/);
    cy.get(":nth-child(6) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Unidad de Negocio\s*$/);
    cy.get(":nth-child(7) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Puerto Origen\s*$/);
    cy.get(":nth-child(8) > .col-md-3")
      .invoke("text")
      .should("match", /^\s*Puerto Destino\s*$/);
    cy.get(".btn-secondary")
      .scrollIntoView()
      .invoke("text")
      .should("match", /^\s*Cancelar\s*$/);
    cy.get(".btn-primary")
      .invoke("text")
      .should("match", /^\s*Guardar\s*$/);
  }

  addOperation() {
    cy.get(".ng-input").eq(0).click();
    cy.contains("IMPORTACIÓN").scrollIntoView().click();
    cy.get(".ng-input").eq(1).click();
    cy.contains("MARÍTIMA").scrollIntoView().click();
    cy.get(".ng-input").eq(2).click();
    cy.contains("FULL CONTAINER LOAD (FCL)").scrollIntoView().click();
    cy.get(".ng-input").eq(3).click();
    cy.contains("DTD").scrollIntoView().click();
    cy.get(".ng-input").eq(4).click().type("Fede");
    cy.contains("Fede QA").scrollIntoView().click();
    cy.get(".ng-input").eq(5).click();
    cy.contains("Unidad Negocio Fede").scrollIntoView().click();
    cy.get(".ng-input").eq(6).click();
    cy.contains("KINGSTON").scrollIntoView().click();
    cy.get(".ng-input").eq(7).click();
    cy.contains("COCO SOLO").scrollIntoView().click();
    cy.get(".btn-primary").as("guardarButton").click();
  }

  detailOperation() {
    //Sección Encabezado
    cy.contains(" Operación ( Activa ): ");
    cy.contains(" IMPORTACIÓN MARÍTIMA FULL CONTAINER LOAD (FCL)");
    cy.get(".row-header > :nth-child(1) > :nth-child(2)")
      .as("codeElis")
      .should("be.visible");
    cy.contains(" Customer Service ");
    cy.get(".div-img > .width-50").as("imageCS").should("be.visible");
    cy.get(".ng-star-inserted > .step-indicator")
      .as("messageIconCS")
      .should("be.visible");
    cy.contains(" CS Fede Elias ");
    cy.contains("fede@cs.com");
    cy.contains(" Cliente ");
    cy.contains(" Fede QA ");
    cy.contains(" Transporte ");
    cy.contains(" Sin Dato ");
    cy.contains(" MoveType ");
    cy.contains(" DTD ");
    cy.contains(" Shipper ");
    cy.contains(" Sin Dato ");
    cy.contains(" Puerto Origen ");
    cy.contains(" KINGSTON ");
    cy.contains(" , Jamaica ");
    cy.contains(" Puerto Destino ");
    cy.contains(" COCO SOLO ");
    cy.contains(", Panama ");
    //Sección Barra de progreso
    cy.get(".steps-1").as("imageProgressBarPreBooking").should("be.visible");
    cy.contains("Origen");
    cy.get(".topBar > :nth-child(1)")
      .as("originProgressBar")
      .should("be.visible");
    cy.contains("Trayecto Internacional");
    cy.get(".col-8").as("internationalJourneyProgressBar").should("be.visible");
    cy.contains("Destino");
    cy.get(".topBar > :nth-child(3)")
      .as("destinyProgressBar")
      .should("be.visible");
    cy.get("app-botton-incidence.ng-star-inserted > .btn")
      .should("contain.text", "Alta de una Incidencia")
      .and("not.be.disabled");
    cy.get(":nth-child(1) > .btn-outline-danger")
      .should("contain.text", " Regresar status ")
      .and("not.be.disabled");
    cy.get(
      "aw-wizard-step.ng-star-inserted > :nth-child(1) > .btn-outline-success"
    )
      .should("contain.text", " Confirmar pre booking ")
      .and("not.be.disabled");
    //Sección Mapa
    cy.get(".ymaps-2-1-79-events-pane").as("yandexMap").should("be.visible");
    //Sección Tabs del Detalle de operación
    cy.get("#detail")
      .should("contain.text", " Detalle Operación ")
      .and("not.be.disabled");
    cy.get("#fields")
      .should("contain.text", " Bitácora ", " Campos ")
      .and("not.be.disabled");
    cy.get("#logs")
      .should("contain.text", " Bitácora ", " Estado ")
      .and("not.be.disabled");
    cy.get("#alerts")
      .should("contain.text", " Bitácora ", " Alertas ")
      .and("not.be.disabled");
    cy.get("#transit")
      .should("contain.text", " Tiempos de ", " tránsito ")
      .and("not.be.disabled");
    cy.get("#tracksLog")
      .should("contain.text", " Bitácora ", " Tracks ")
      .and("not.be.disabled");
    //Sección Formulario
    cy.contains("Formulario");
    cy.get(".col-md-9 > .btn-outline-primary")
      .should("contain.text", "File Closure")
      .and("not.be.disabled");
    cy.get(".col-md-9 > .btn-outline-danger")
      .should("contain.text", "Cancelar operación")
      .and("not.be.disabled");
    cy.get(".col-md-9 > .btn-outline-warning")
      .should("contain.text", "Bloquear operación")
      .and("not.be.disabled");
    cy.get("span.pull-right > .btn")
      .should("contain.text", " Operation Closure ")
      .and("be.disabled");
    cy.get("app-booking-confirmation-imp.ng-tns-c289-34 > .btn")
      .should("contain.text", "Booking confirmation Imp")
      .and("not.be.disabled");
    cy.get("app-arrival-notification-imp.ng-tns-c289-34 > .btn")
      .should("contain.text", "Arrival Notification Imp")
      .and("not.be.disabled");
    cy.get(":nth-child(1) > .operation-item-name").should(
      "have.text",
      " Puerto Origen "
    );
    cy.get(":nth-child(1) > .operation-item-value").should(
      "contain.text",
      " KINGSTON ",
      ", Jamaica "
    );
    cy.get(":nth-child(2) > .operation-item-name").should(
      "have.text",
      " Puerto Destino "
    );
    cy.get(":nth-child(2) > .operation-item-value").should(
      "contain.text",
      " COCO SOLO ",
      ", Panama "
    );
    cy.get(":nth-child(3) > .operation-item-name").should(
      "have.text",
      " Cliente "
    );
    cy.get(":nth-child(3) > .operation-item-value").should(
      "contain.text",
      " Fede QA "
    );
    cy.get(":nth-child(4) > .operation-item-name").should(
      "have.text",
      " Unidad de Negocio "
    );
    cy.get(":nth-child(4) > .operation-item-value").should(
      "contain.text",
      " Unidad Negocio Fede ",
      ", Unidad Negocio Fede "
    );
    cy.get(".text-bold-200 > :nth-child(1)").should("have.text", " Equipo: ");
    cy.get(".text-bold-200 > :nth-child(2)").should("have.text", " EQUIPO QA ");
    cy.get(":nth-child(4) > strong.ng-tns-c313-33").should(
      "have.text",
      " Customer Service: "
    );
    cy.get(":nth-child(4) > span.ng-tns-c313-33").should(
      "have.text",
      " CS Fede Elias "
    );
    cy.get(":nth-child(6) > strong.ng-tns-c313-33").should(
      "have.text",
      " Operador: "
    );
    cy.get(":nth-child(6) > span.ng-tns-c313-33").should(
      "have.text",
      " Operador Fede Elias "
    );
    cy.get(":nth-child(5) > .operation-item-name").should(
      "have.text",
      " Activar seguimiento con P44 "
    );
    cy.get(".btn-group > .btn-raised").should("have.text", " Activar ");
    //Sección Tracks
    cy.get(".title-operation > .d-inline").should("have.text", " Tracks ");
    cy.get(".card-header > .title-operation > .btn")
      .should("have.text", " Agregar Track ")
      .and("not.be.disabled");
    cy.get(".card-header > .row > .offset-md-9 > .btn")
      .should("have.text", " Guardar ")
      .and("not.be.disabled");
    //Sección Check List
    cy.get(".title-operation h4")
      .eq(2)
      .should("be.visible")
      .and("contain.text", "CHECK LIST");
    cy.get(".see-more.pull-right.pr-1")
      .eq(0)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(0)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Pre-Booking
    cy.get(".title-operation h4")
      .eq(3)
      .should("be.visible")
      .and("contain.text", " PRE-BOOKING ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(1)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(1)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Asignación de Naviera
    cy.get(".title-operation h4")
      .eq(4)
      .should("be.visible")
      .and("contain.text", " ASIGNACION DE NAVIERA ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(2)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(2)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Booking
    cy.get(".title-operation h4")
      .eq(5)
      .should("be.visible")
      .and("contain.text", " BOOKING ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(3)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(3)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Documentación Cliente
    cy.get(".title-operation h4")
      .eq(6)
      .should("be.visible")
      .and("contain.text", " DOCUMENTACIÓN CLIENTE ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(4)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(4)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Agente Aduanal
    cy.get(".title-operation h4")
      .eq(7)
      .should("be.visible")
      .and("contain.text", " AGENTE ADUANAL ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(5)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(5)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Entrega
    cy.get(".title-operation h4")
      .eq(8)
      .should("be.visible")
      .and("contain.text", " ENTREGA ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(6)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(6)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Documentación Eternity
    cy.get(".title-operation h4")
      .eq(9)
      .should("be.visible")
      .and("contain.text", " DOCUMENTACIÓN ETERNITY ");
    cy.get(".see-more.pull-right.pr-1")
      .eq(7)
      .should("contain.text", " Ver Más ");
    cy.get(".icon-open.pr-3.fa.fa-angle-down.pull-right.ng-star-inserted")
      .eq(7)
      .should("be.visible")
      .and("not.be.disabled");
    //Sección Contenedor
    cy.get(".title-operation h4")
      .eq(10)
      .should("be.visible")
      .and("contain.text", " Contenedor ");
    cy.get(".pl-2 > .btn-outline-success")
      .should("contain.text", " Agregar contenedor ")
      .and("not.be.disabled");
    cy.get(".pl-2 > .btn-outline-primary")
      .should("contain.text", " Copiar contenedor ")
      .and("not.be.disabled");
    //Footer con botones
    cy.get(".pt-4.ng-tns-c313-33 > .offset-md-9 > .btn-primary")
      .should("have.text", " Guardar ")
      .and("not.be.disabled");
    cy.get(".offset-md-9 > .btn-secondary")
      .should("have.text", " Cancelar ")
      .and("not.be.disabled");
  }

  addTracks() {
    cy.get(".card-header > .title-operation > .btn")
      .as("addTrackButton")
      .click();
    cy.contains(" Track Nº 1 ").click();
    cy.get(
      ".row.ng-star-inserted > :nth-child(1) > app-select-catalog > .operation-select > .ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    ).type("Marítimo{enter}");
    cy.get(
      ":nth-child(2) > app-select-catalog > .operation-select > div.ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    ).type("T{enter}");
    cy.get(
      ":nth-child(3) > app-select-catalog > .operation-select > .ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    )
      .type("Coco Solo")
      .wait(3000)
      .type("{enter}", { force: true });
    cy.get(
      ":nth-child(4) > app-select-catalog > .operation-select > .ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    )
      .type("Kingston")
      .wait(3000)
      .type("{enter}", { force: true });
    cy.get(
      ":nth-child(5) > app-date-time > .ng-touched > .minWidth > :nth-child(1) > .input-group > :nth-child(3) > .input-group-text > .fa"
    )
      .as("calendarETD")
      .click();
    cy.get('[aria-label="25-9-2023"] > .btn-light').click(); //Selecciono 25/9/2023
    cy.get(
      ":nth-child(7) > app-date-time > .ng-touched > .minWidth > :nth-child(1) > .input-group > :nth-child(3) > .input-group-text > .fa"
    )
      .as("calendarETA")
      .click();
    cy.get('[aria-label="26-9-2023"] > .btn-light').click(); //Selecciono 26/9/2023
    cy.get(
      ":nth-child(9) > app-select-catalog > .operation-select > .ng-touched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).type("Presidio{enter}");
    cy.get(
      ":nth-child(10) > app-select-catalog > .operation-select > .ng-touched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    ).type("0004{enter}");
    cy.get("@addTrackButton").click();
    cy.contains(" Track Nº 2 ").click();
    cy.get(
      ".row.ng-star-inserted > :nth-child(1) > app-select-catalog > .operation-select > .ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    ).type("Marítimo{enter}");
    cy.get(
      ":nth-child(2) > app-select-catalog > .operation-select > div.ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    ).type("T{enter}");
    cy.get(
      ":nth-child(3) > app-select-catalog > .operation-select > .ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    )
      .type("Kingston")
      .wait(3000)
      .type("{enter}", { force: true });
    cy.get(
      ":nth-child(4) > app-select-catalog > .operation-select > .ng-invalid > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    )
      .type("Coco Solo")
      .wait(3000)
      .type("{enter}", { force: true });
    cy.get(
      ":nth-child(5) > app-date-time > .ng-touched > .minWidth > :nth-child(1) > .input-group > :nth-child(3) > .input-group-text > .fa"
    )
      .as("calendarETD")
      .click();
    cy.get('[aria-label="26-9-2023"] > .btn-light').click(); //Selecciono 26/9/2023
    cy.get(
      ":nth-child(7) > app-date-time > .ng-touched > .minWidth > :nth-child(1) > .input-group > :nth-child(3) > .input-group-text > .fa"
    )
      .as("calendarETA")
      .click();
    cy.get('[aria-label="27-9-2023"] > .btn-light').click(); //Selecciono 27/9/2023
    cy.get(
      ":nth-child(9) > app-select-catalog > .operation-select > .ng-touched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input"
    ).type("Presidio{enter}");
    cy.get(
      ":nth-child(10) > app-select-catalog > .operation-select > .ng-touched > .row > .col-12 > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input"
    )
      .type("0005")
      .wait(3000)
      .type("{enter}", { force: true });
    cy.get(".px-2 > .pt-4 > .offset-md-9 > .btn")
      .as("guardarTrackButton")
      .click();
  }
  fechasIncompatibles() {
    cy.get(".swal2-popup").should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.wait(3000);
  }

  changeStatus() {
    cy.get(
      "aw-wizard-step.ng-star-inserted > :nth-child(1) > .btn-outline-success"
    )
      .as("confirmarPreBookingButton")
      .click();
    cy.wait(5000);
    cy.get(".swal2-popup").as("popUpPrebooking").should("be.visible");
    cy.get(".swal2-textarea").type("Confirmar Pre Booking");
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").as("preBookingConfirmadoTitle").should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.contains("Booking");
    cy.get(
      "aw-wizard-step.ng-star-inserted > :nth-child(1) > .btn-outline-success"
    )
      .as("confirmarBookingButton")
      .click();
    cy.wait(5000);
    cy.get(".swal2-popup").as("popUpBooking").should("be.visible");
    cy.get(".swal2-textarea").type("Confirmar Booking");
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").as("bookingConfirmadoTitle").should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.contains("Departure");
    cy.get(
      "aw-wizard-step.ng-star-inserted > :nth-child(1) > .btn-outline-primary"
    )
      .as("confirmarDepartureButton")
      .click();
    cy.wait(5000);
    cy.get(".swal2-popup").as("popUpDeparture").should("be.visible");
    cy.get(".swal2-textarea").type("Confirmar Departure");
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").as("departureConfirmadoTitle").should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.contains("Arrival");
    cy.get("aw-wizard-step.ng-star-inserted > :nth-child(1) > :nth-child(3)")
      .as("confirmarArrivalButton")
      .click();
    cy.wait(5000);
    cy.get(".swal2-popup").as("popUpArrival").should("be.visible");
    cy.get(".swal2-textarea").type("Confirmar Arrival");
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title").as("arrivalConfirmadoTitle").should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.contains("Entrega Final");
    cy.get("aw-wizard-step.ng-star-inserted > :nth-child(1) > :nth-child(3)")
      .as("confirmarEntregaFinalButton")
      .click();
    cy.wait(5000);
    cy.get(".swal2-popup").as("popUpEntregaFinal").should("be.visible");
    cy.get(".swal2-textarea").type("Confirmar Entrega Final");
    cy.get(".swal2-confirm").click();
    cy.get(".swal2-popup").should("be.visible");
    cy.get("#swal2-title")
      .as("entregaFinalConfirmadaTitle")
      .should("be.visible");
    cy.get(".swal2-confirm").click();
    cy.contains("Entrega Final");
  }

  deleteOperation() {
    cy.get(".ft-settings").as("operacionesButton").click();
    cy.wait(3000);
    cy.contains(" Importación ").click();
    cy.wait(3000);
    cy.get(
      ":nth-child(1) > :nth-child(13) > app-delete-action-button.ng-star-inserted > .danger"
    )
      .as("deleteButton")
      .click();
    cy.get(".swal2-popup").as("popUpEliminarOperacion").should("be.visible");
    cy.get("#swal2-title").should("contain.text", "Estás seguro?");
    cy.get(".swal2-cancel")
      .should("contain.text", "Cancelar")
      .and("not.be.disabled");
    cy.get(".swal2-confirm").should("contain.text", "Confirmar").click();
    cy.wait(5000);
    cy.get(".swal2-popup").as("popUpOperacionEliminada").should("be.visible");
    cy.get("#swal2-title").should("contain.text", "Borrado!");
    cy.get(".swal2-confirm").should("contain.text", "OK").click();
  }

  reportCreateModule() {}

  reportListModule() {}

  marketingReleaseModule() {}

  marketingNewsModule() {}
}

export default ModulesAdmin;
