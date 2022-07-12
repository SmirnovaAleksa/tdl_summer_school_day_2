import BasePage from "./basePage";

class RadioButtonPage extends BasePage {
    static get url() {
        return "/radio-button";
      }

    static get yesButton() {
        return cy.get('[id="yesRadio"]');
    }
    static get impressiveButton() {
        return cy.get('[id="impressiveRadio"]');
    }  
    static get noButton() {
        return cy.get('.custom-control.disabled');
    }  

    static get result() {
        return cy.get('.text-success')
    }  

}

export default RadioButtonPage;