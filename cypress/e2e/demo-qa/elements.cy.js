import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";
import WebTablesPage from "../../pageObjects/webTablesPage";
import ButtonPage from "../../pageObjects/buttonPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      // add the necessary steps
      TextBoxPage.userName.type("Aleksandra");
      TextBoxPage.userEmail.type("smirnovaaleksa39@gmail.com");
      TextBoxPage.currentAddress.type("Jūras iela 47");
      TextBoxPage.permanentrAddress.type("Sigūldas iela 35");
      TextBoxPage.submitButton.click();

      TextBoxPage.name.should("contain.text","Aleksandra");
      TextBoxPage.email.should("contain.text","smirnovaaleksa39@gmail.com");
      TextBoxPage.borderCurrentAddress.should("contain.text","Jūras iela 47");
      TextBoxPage.borderPermanentrAddress.should("contain.text","Sigūldas iela 35");
    });
  });

  context("Check box scenarios", () => {
    // Create CheckBoxPage page object
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    //cy.get(':nth-child(1) > .element-list > .menu-list > #item-1')
    // Create checkbox scenario 1:
    it("scenario 1", () => {
      // Click the "+"/expand button
      CheckBoxPage.plusButton.click();
      // Click Notes, React, Angular, General, Excel File.doc
      CheckBoxPage.checkNotes.click();
      CheckBoxPage.checkReact.click();
      CheckBoxPage.checkAngular.click();
      CheckBoxPage.checkGeneral.click();
      CheckBoxPage.checkExcel.click();
      // Validate the clicked checkboxes
      CheckBoxPage.result.should("contains.text","notes");
      CheckBoxPage.result.should("contains.text","react");
      CheckBoxPage.result.should("contains.text","angular");
      CheckBoxPage.result.should("contains.text","general");
      CheckBoxPage.result.should("contains.text","excelFile");
    })
    // Create checkbox scenario 2:
    it("scenario 2", () => {
    // Click expand button
    CheckBoxPage.plusButton.click();
    // Click Office
    CheckBoxPage.checkOffice.check({force: true});
    // Validate the checked checkboxes
    CheckBoxPage.result.should("contains.text","office");
    CheckBoxPage.result.should("contains.text","public");
    CheckBoxPage.result.should("contains.text","private");
    CheckBoxPage.result.should("contains.text","classified");
    CheckBoxPage.result.should("contains.text","general");
    })
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    beforeEach(() => {
      RadioButtonPage.visit();
    });
    // Scenario 1:
    it("Secenario 1", ()=> {
      // Click yesButton
      RadioButtonPage.yesButton.check({force: true});
      // validate the message
      RadioButtonPage.result.should("have.text","Yes");
      // click impressiveButton
      RadioButtonPage.impressiveButton.check({force: true});
      // validate the message
      RadioButtonPage.result.should("have.text","Impressive");
      // noButton - validate that the button exists but is disabled
      RadioButtonPage.noButton.should("exist")
      RadioButtonPage.noButton.should("have.class","disabled");
    })
   
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    beforeEach(() => {
      WebTablesPage.visit();
    });
    // Create scenario 1:
    it("Secenario 1", ()=> {
      // Click add record button
      WebTablesPage.addButton.click();
      // fill in the necessary information
      WebTablesPage.firstName.type("Aleksandra");
      WebTablesPage.lastName.type("Smirnova");
      WebTablesPage.email.type("smirnovaaleksa39@gmail.com");
      WebTablesPage.age.type("23");
      WebTablesPage.salary.type("1100");
      WebTablesPage.department.type("TestDevLab Ventspils");
      // click submit button
      WebTablesPage.submitButton.click();
      // search for the user based on previously added information
      WebTablesPage.searchBox.type("Smirnova");
      // validate tha the user is visible
      WebTablesPage.firstRow.should("contain.text","Aleksandra");
      WebTablesPage.firstRow.should("contain.text","Smirnova");
      WebTablesPage.firstRow.should("contain.text","smirnovaaleksa39@gmail.com");
      WebTablesPage.firstRow.should("contain.text","23");
      WebTablesPage.firstRow.should("contain.text","1100");
      WebTablesPage.firstRow.should("contain.text","TestDevLab Ventspils");
    })
    // Create Scenario 2:

    it("Secenario 2", ()=> {
      // Delete all table rows
      //cy.get('[class = "rt-tr-group"]').first();
      WebTablesPage.table.each(($el, index, $list) => {
         if(index < 3){
          cy.get(`#delete-record-${index + 1} > svg`).click();
         }
      })
      //cy.get(".rt-tbody > :nth-child("+rows+") > .rt-tr > :nth-child("+rows+")");
      // Validate that we see text - No rows found
      WebTablesPage.noData.should("exist");

    })
  });

  context("Buttons scenarios", () => {
    // Create Buttons page
    beforeEach(() => {
      ButtonPage.visit();
    });
    // Create buttons clicking scenario
    it.only("Button Scenario", () => {
      // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
      // Click Double click button
      ButtonPage.doubleButton.dblclick();
      // Validate the double click message
      ButtonPage.doubleMessage.should("have.text","You have done a double click");
      // Click rightclick button
      ButtonPage.rightButton.rightclick();
      // Validate the right click message
      ButtonPage.rightMessage.should("have.text","You have done a right click");
      // Do dynamic click
      ButtonPage.dynamicButton.click();
      // Validate dynamic click message
      ButtonPage.dynamicMessage.should("have.text","You have done a dynamic click");
    })
   
  });
});
