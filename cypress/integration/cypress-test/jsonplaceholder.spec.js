
describe('Jason place holder test', ()=> {
    it('test GET', () => {
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('getRequest');
        cy.get('a[href*="/posts/1"]').first().click();
        cy.wait('@getRequest').then((xhr) => {
            cy.log(xhr.response.body.body);
        });

    });

});