/* eslint-disable no-undef */
/// <reference types="cypress" />

const URL = 'http://200.19.243.73:5173/';
const DELAY = 2000;

context('Actions', () => {
  // it("Aguarda 2s para iniciar os testes: ", ()=> cy.wait(2000)); 
  beforeEach(() => {
    cy.wait(DELAY)
    cy.visit(URL)
  })

  afterEach(() => {
    cy.wait(DELAY); // waits 2 seconds after each test
  });

    it('Testar se a logo volta para a página inicial', () => {
    cy.get('header')
      .find('div>div>a>img')
      .click()
    cy.get('main')
    });

    it('Faz login a partir de um click na sidebar, lista usuarios e faz logout', () => {
/*     cy.mount(<Header/>)
 */   cy.get('nav')
          .find('div>div>a[href*="/login"]')
          .click()
      cy.get('main')
    });
});