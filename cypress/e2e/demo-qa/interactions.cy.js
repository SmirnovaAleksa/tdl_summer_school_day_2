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
      SelectablePage.row1.click();
      // Validate that class contains active
      SelectablePage.row1.should("have.class","active");
      // Click on "Dapibus ac facilisis in"
      SelectablePage.row2.click();
      // Validate that chosen buttons contains class active
      SelectablePage.row2.should("have.class","active");
    })
     // Create scenario 2:
    it.only("Scenario 2", () =>{
      // Click on grid
      SelectablePage.gridButton.click();
      // Click on numbers 4, 8, 6, 2
      SelectablePage.getFour.click();
      SelectablePage.getEight.click();
      SelectablePage.getSix.click();
      SelectablePage.getTwo.click();
      // Validate that chosen buttons contains class active
      SelectablePage.getFour.should("have.class","active");
      SelectablePage.getEight.should("have.class","active");
      SelectablePage.getSix.should("have.class","active");
      SelectablePage.getTwo.should("have.class","active");
    })
  });
});
