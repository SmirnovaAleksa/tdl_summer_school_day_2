import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
      }
    static get plusButton(){
        return cy.get('.rct-option-expand-all > .rct-icon');
    }
    static get checkNotes(){
        return cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon');
    }
    static get checkReact(){
        return cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(1) > .rct-text > label > .rct-checkbox > .rct-icon');
    }
    static get checkAngular(){
        return cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon');
    }
    static get checkGeneral(){
        return cy.get(':nth-child(4) > .rct-text > label > .rct-checkbox > .rct-icon');
    }
    static get checkExcel(){
        return cy.get(':nth-child(3) > ol > :nth-child(2) > .rct-text > label > .rct-checkbox > .rct-icon');
    }
    static get resultNotes(){
        return cy.get('#result > :nth-child(2)');
    }
    static get resultReact(){
        return cy.get('#result > :nth-child(3)');
    }
    static get resultAngular(){
        return cy.get('#result > :nth-child(4)');
    }
    static get resultGeneral(){
        return cy.get('#result > :nth-child(5)');
    }
    static get resultExcel(){
        return cy.get('#result > :nth-child(6)');
    }
}

export default CheckBoxPage;