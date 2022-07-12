import BasePage from "./basePage";

class ButtonPage extends BasePage {
    static get url() {
        return "/buttons";
      }
      static get doubleButton() {
        return cy.get('#doubleClickBtn');
      }
      static get doubleMessage() {
        return cy.get('#doubleClickMessage');
      }
      static get rightButton() {
        return cy.get('#rightClickBtn');
      }
      static get rightMessage() {
        return  cy.get('#rightClickMessage');
      }
      static get dynamicButton() {
        return cy.get('button[class = "btn btn-primary"]').eq(2);
      }
      static get dynamicMessage() {
        return cy.get('#dynamicClickMessage');
      }

}

export default ButtonPage;