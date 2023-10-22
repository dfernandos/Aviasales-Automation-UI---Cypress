const HomePageObject = function () {
    this.switchNightTheame = 'label[data-test-id="switch"]'
    this.originInputField = '[data-test-id="origin-autocomplete-field"]'
    this.destinationInputField = '[data-test-id="destination-autocomplete-field"]'
    this.departureDateInputField = '.trip-duration__input-wrapper --departure'
    this.departureDay = '[aria-label="Mon Oct 30 2023"]'
    this.passagerField = '[data-test-id="passengers-field"]'
    this.numberPassangerButton = '[data-test-id="passengers-adults-field"] a.additional-fields__passenger-control.--increment'
    this.departureDate = 'data-test-id="departure-date-input"'
    this.checkbox = '.of_input_checkbox__label'
    this.submitButton = '[data-test-id="form-submit"]'



    this.searchForFlight  = async (origin, destination, departureDate) =>  {
      cy.get(this.switchNightTheame).click();
      cy.get(this.checkbox).click();
      cy.get(this.originInputField).type(origin)
      cy.get(this.destinationInputField).type(destination)

      cy.get(`div[aria-label="${departureDate}"]`).click();
      cy.get(this.passagerField).click();
      cy.get(this.numberPassangerButton).click();
      cy.get(this.submitButton).click();
    }


    this.validateDataInputPreviously = async (origin, destination, departureDate, passangers) => {
      cy.get('input[data-test-id="origin-autocomplete-field"]').invoke('val').then(actualValue => {
        expect(origin).to.equal(origin, `Expected: ${origin}, Actual: ${actualValue}`);
      });
      cy.get('input[data-test-id="destination-autocomplete-field"]').invoke('val').then(actualValue => {
        expect(destination).to.equal(destination, `Expected: ${destination}, Actual: ${actualValue}`);
      });
      cy.get('input[data-test-id="departure-date-input"]').should('have.attr', 'value', departureDate);
      cy.get('div.additional-fields__label').should('include.text', passangers);
    }
  }

  module.exports = new HomePageObject();