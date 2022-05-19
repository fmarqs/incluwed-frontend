/// <reference types="cypress"/>

context('Post Incluwed', () => {
    it('Cadastrar post', () => {

        cy.visit('http://localhost:3000/');

        cy.get('#post').click()
        cy.get('#title').type('Teste')
        cy.get('#local').type('Local Teste')
        cy.get('#text').type('Texto teste')
        cy.get('button').contains('Publicar').click()
    });
});
