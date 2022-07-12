import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonPage from "../../pageObjects/radioButtonPage";

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
    it.only("Secenario 1", ()=> {
      // Click yesButton
      RadioButtonPage.yesButton.check({force: true});
      // validate the message
      RadioButtonPage.result.should("have.text","Yes");
      // click impressiveButton
      RadioButtonPage.impressiveButton.check({force: true});
      // validate the message
      RadioButtonPage.result.should("have.text","Impressive");
      // noButton - validate that the button exists but is disabled
      RadioButtonPage.noButton.should("be.visible");
      RadioButtonPage.noButton.should("have.class","disabled");
    })
   
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
