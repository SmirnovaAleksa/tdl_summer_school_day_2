import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get userName() {
    return cy.get('#userName');
  }
  static get userEmail() {
    return cy.get('#userEmail');
  }
  static get currentAddress() {
    return cy.get('#currentAddress');
  }
  static get permanentrAddress() {
    return cy.get('#permanentAddress');
  }

  static get name() {
    return cy.get('#name');
  }
  static get email() {
    return cy.get('#email');
  }
  static get borderCurrentAddress() {
    return cy.get('.border > #currentAddress')
  }
  static get borderPermanentrAddress() {
    return cy.get('.border > #permanentAddress')
  }
  
  static get submitButton() {
    return cy.get('#submit');
  }
}

export default TextBoxPage;
