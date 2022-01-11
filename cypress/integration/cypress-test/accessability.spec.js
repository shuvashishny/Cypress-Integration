

describe('accessability', () => {
    it('first test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.injectAxe();
        cy.checkA11y();
    });
});