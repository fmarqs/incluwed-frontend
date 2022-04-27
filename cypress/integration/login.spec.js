/// <reference types="cypress"/>

context('Login Incluwed', () => {
    it('Login', () => {

        cy.visit('http://localhost:3000/login');

        cy.get('#login').type('UsuarioTeste')
        cy.get('#senha').type('SenhaTeste')
        cy.get('#entrar').click()
    });
});
