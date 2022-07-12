// import page objects
import SelectablePage from "../../pageObjects/selectablePage";

context("Interactions", () => {
  context("Selectable", () => {
    // Create SelectablePage page object
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create scenario 1:
    it("scenario 1", () => {
      // Click on "Cras justo odio"
      cy.get('#verticalListContainer > :nth-child(1)').click();
      // Validate that class contains active
      cy.get('#verticalListContainer > :nth-child(1)').should("have.class","active");
      // Click on "Dapibus ac facilisis in"
      cy.get('#verticalListContainer > :nth-child(2)').click();
      // Validate that chosen buttons contains class active
      cy.get('#verticalListContainer > :nth-child(2)').should("have.class","active");
    })
     // Create scenario 2:
    it.only("Scenario 2", () =>{
      // Click on grid
      cy.get('#demo-tab-grid').click();
      // Click on numbers 4, 8, 6, 2
      cy.get('#row2 > :nth-child(1)').click();
      cy.get('#row2 > :nth-child(2)').click();
      cy.get('#row2 > :nth-child(3)').click();
      cy.get('#row1 > :nth-child(2)').click();
      // Validate that chosen buttons contains class active
      cy.get('#row2 > :nth-child(1)').should("have.class","active");
      cy.get('#row2 > :nth-child(2)').should("have.class","active");
      cy.get('#row2 > :nth-child(3)').should("have.class","active");
      cy.get('#row1 > :nth-child(2)').should("have.class","active");
    })
   
   
  });
});
