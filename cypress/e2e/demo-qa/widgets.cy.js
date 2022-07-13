import ToolTipsPage from "../../pageObjects/toolTipsPage";
import ProgressBarPage from "../../pageObjects/progressBarPage";

context("Widgets", () => {
    context("Tool Tips", () => {
        beforeEach(() => {
            ToolTipsPage.visit();
          });

        it("scenario 1",()=>{
            ToolTipsPage.tooTipButton.trigger('mouseover');
            ToolTipsPage.buttonPopUp.should("be.visible");

            ToolTipsPage.tooTipTextField.trigger('mouseover');
            ToolTipsPage.textFieldPopUp.should("be.visible");

            ToolTipsPage.tooTipContainer.trigger('mouseover');
            ToolTipsPage.contraryPopUp.should("be.visible");

            ToolTipsPage.tooTipSection.trigger('mouseover');
            ToolTipsPage.sectionPopUp.should("be.visible");
        })
    });
    context("Progress bar", () => {
        beforeEach(() => {
            ProgressBarPage.visit();
          });

        it.only("scenario 1",()=>{
            ProgressBarPage.startStopButton.click();
            ProgressBarPage.progressBar.should("contain.text","25");
            ProgressBarPage.startStopButton.click();
            ProgressBarPage.progressBar.should("contain.text","25");

            ProgressBarPage.startStopButton.click();
            ProgressBarPage.progressBar.should("contain.text","75");
            ProgressBarPage.startStopButton.click();
            ProgressBarPage.progressBar.should("contain.text","75");
            
            ProgressBarPage.startStopButton.click();
            ProgressBarPage.progressBar.should("contain.text","99");
            ProgressBarPage.startStopButton.click();
            ProgressBarPage.progressBar.should("contain.text","99");
        })
    });

});