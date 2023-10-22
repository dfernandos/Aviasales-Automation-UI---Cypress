const homePageObject = require('./pages/homePageObject.js')

describe('Search for Flight', () => {
  describe('Search for flight successfully', () => {
    describe('Given I am in the homepage', () => {
        describe('When I search for a flight with the valid data: "John F. Kennedy International Airport", "Berlin", "Mon Oct 30 2023"', () => {
          describe('Then the search page is loaded with the same data added previously', () => {
            it('Test', () => {
              cy.viewport(1524, 900)
              cy.visit('/')   
              homePageObject.searchForFlight("John F. Kennedy International Airport", "Berlin", "Mon Oct 30 2023");
              cy.url().should('include', '/search/');
              homePageObject.validateDataInputPreviously('John F. Kennedy International Airport', "Berlin", "Mon, October 30", "2 passengers");            
            })
          })
        })
    })
  })


})