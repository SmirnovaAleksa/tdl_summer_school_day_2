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
    static get checkOffice(){
        return cy.get('[id = "tree-node-office"]');
    }
    static get result(){
        return cy.get('#result');
    }
}

export default CheckBoxPage;