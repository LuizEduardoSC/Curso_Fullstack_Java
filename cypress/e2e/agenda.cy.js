/// <reference types="cypress" />

describe('Testes para a home', () => {

    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve preencher o formulário de inserção', () => {
        cy.get('.contato').then(contatos => {
            const qtdContatos = contatos.length

            cy.get('input[type="text"]').type('Luiz Eduardo')
            cy.get('input[type="email"]').type('eduardo@gmail.com')
            cy.get('input[type="tel"]').type('1212345678')
            cy.get('button[type="submit"]').click()

            cy.get('.contato').should('have.length', qtdContatos + 1)

            cy.contains('.contato', 'Luiz Eduardo').should('exist')
            cy.contains('.contato', 'eduardo@gmail.com').should('exist')
        })
    })

    it('Deve editar um contato', () => {

        cy.get('input[type="text"]').type('Contato Editável')
        cy.get('input[type="email"]').type('editavel@teste.com')
        cy.get('input[type="tel"]').type('11999999999')
        cy.get('button[type="submit"]').click()


        cy.contains('.contato', 'Contato Editável')
            .find('button.edit')
            .click()

        cy.get('input[type="text"]').clear().type('Contato Editado')
        cy.get('input[type="email"]').clear().type('editado@teste.com')
        cy.get('button[type="submit"]').click()

        cy.contains('Contato Editado').should('exist')
        cy.contains('editado@teste.com').should('exist')
    })

    it('Deve excluir um contato', () => {

        cy.get('input[type="text"]').type('Contato Removível')
        cy.get('input[type="email"]').type('remover@teste.com')
        cy.get('input[type="tel"]').type('11988887777')
        cy.get('button[type="submit"]').click()


        cy.contains('.contato', 'Contato Removível').should('be.visible')


        cy.contains('.contato', 'Contato Removível')
            .find('button')
            .last()
            .click({ force: true })
    })


})
