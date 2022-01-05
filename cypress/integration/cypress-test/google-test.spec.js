
describe('Google page', () => {
    it.skip('home page', () => {
        cy.visit('https://www.google.com/');

    });

    it('visit multi domain', () => {
        cy.visit("https://www.google.com/");
        cy.forceVisit('https://facebook.com');
    });

});