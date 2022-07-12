import BasePage from "./basePage";

class SelectablePage extends BasePage {
    static get url() {
        return "/selectable";
      }
    static get row1(){
        return cy.get('#verticalListContainer > :nth-child(1)');
    }
    static get row2(){
        return cy.get('#verticalListContainer > :nth-child(2)');
    }
    static get gridButton(){
        return cy.get('#demo-tab-grid');
    }
    static get getFour(){
        return cy.get('#row2 > :nth-child(1)');
    }
    static get getEight(){
        return cy.get('#row2 > :nth-child(2)');
    }
    static get getSix(){
        return cy.get('#row2 > :nth-child(3)');
    }
    static get getTwo(){
        return cy.get('#row1 > :nth-child(2)');
    }
}

export default SelectablePage;