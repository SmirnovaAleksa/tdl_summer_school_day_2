import BasePage from "./basePage";

class WebTablesPage extends BasePage {
    static get url() {
        return "/webtables";
      }
    static get addButton(){
        return cy.get('#addNewRecordButton');
    }
    static get firstName(){
        return cy.get('#firstName');
    }
    static get lastName(){
        return cy.get('#lastName');
    }
    static get email(){
        return cy.get('#userEmail');
    }
    static get age(){
        return cy.get('#age');
    }
    static get salary(){
        return cy.get('#salary');
    }
    static get department(){
        return cy.get('#department');
    }
    
    static get submitButton(){
        return cy.get('#submit');
    }

    static get searchBox(){
        return cy.get('#searchBox');
    }
    //
    static get firstRow(){
        return cy.get('.rt-tbody > :nth-child(1)');
    }

    static get table(){
        return cy.get('[class = "rt-tr-group"]');
    }

    static get noData(){
        return cy.get("[class = 'rt-noData']");
    }
 }

export default WebTablesPage;