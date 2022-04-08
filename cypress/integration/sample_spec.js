//Cypress Learning
/** 
describe('MyFirst Test', function() {
    it('Does not do much', function() {
        //Arrange - setup intial app state
        // - visit a web page
        // - query for an element
        //Act - take an action
        // - interact with that element
        //Assert - make an assertion
        // - make an assertion about page content
        expect(true.to.equal(true))
    })
})
*/

/** 
describe('My First Test', function() {
    it('Visits the Kitchen Sink', function() {
        
        cy.visit('https://example.cypress.io')
    })
})
*/

/** 
describe('My First Test', function() {
    it('Finds an element', function() {
        
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })
})
*/


describe('My First Test', function() {
    it('Makes an assertion', function() {
        
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')
    })
})


//Lalala
//Master comment
//Another Master comment
//blah
//blah2
describe('My First Test', function() {
    it('Gets, types and asserts', function() {
        
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})


