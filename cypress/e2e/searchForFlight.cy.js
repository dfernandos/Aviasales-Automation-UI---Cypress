const homePageObject = require('./pages/homePageObject.js')

describe('Search for Flight', () => {
  describe('Search for flight successfully', () => {
    describe('Given I am in the homepage', () => {
        describe('When I search for a flight with the valid data: "John F. Kennedy International Airport", "Berlin", "Mon Oct 30 2023"', () => {
          describe('Then the search page is loaded with the same data added previously', () => {
            it('Test', () => {
              cy.viewport(1524, 900)
              cy.visit('/')
              cy.fixture('example.json').then((data) => {
                const { origin, destination, departureDate, passenger } = data;
                homePageObject.searchForFlight(origin, destination, departureDate);
                cy.url().should('include', '/search/');
                homePageObject.validateDataInputPreviously(origin, destination, "Mon, October 30", passenger);            
            })
           })
          })
        })
    })
  })


})