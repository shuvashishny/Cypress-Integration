
describe('Redirect', () => {
    it('first test', () => {
        cy.visit('https://www.google.com/');
        cy.get('[name=q]').type('Dhaka {enter}');
        cy.get('[href="https://en.wikipedia.org/wiki/Dhaka"]').first().click();
        cy.get('#firstHeading').invoke('text').then((text) => {
            cy.log('Text is ', text);
        });

    });
});