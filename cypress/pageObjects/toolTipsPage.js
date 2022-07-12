import BasePage from "./basePage";

class ToolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }
  static get tooTipButton() {
    return cy.get('#toolTipButton')
  }
  static get buttonPopUp() {
    return cy.get('.tooltip-inner');
  }

  static get tooTipTextField() {
    return cy.get('#toolTipTextField');
  }
  static get textFieldPopUp() {
    return cy.get('#textFieldToolTip > .tooltip-inner');
  }

  static get tooTipContainer() {
    return  cy.get('#texToolTopContainer > :nth-child(1)');
  }
  static get contraryPopUp() {
    return cy.get('#contraryTexToolTip > .tooltip-inner');
  }

  static get tooTipSection() {
    return   cy.get('#texToolTopContainer > :nth-child(2)');
  }
  static get sectionPopUp() {
    return cy.get('#sectionToolTip > .tooltip-inner');
  }
//

}

export default ToolTipsPage;