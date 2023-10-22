# Aviasales-Automation-UI---Cypress

🔍 **Sumary**
- [Aviasales](#aviasales)
  - [E2E Tests](#testes-e2e)
    - [Project Structure](#estrutura-do-projeto)
    - [Tech Stack](#tech-stack)
    - [Build](#build)
    - [How to run the tests](#how-to-run-the-tests)
    - [What should be tested](#what-should-be-tested)
    - [Note](#Note)

---

# Aviasales



## E2E Tests

Tests are written in JavaScrip with Cypress framework [Cypress](https://www.cypress.io/).

### Project Structure

```
  |-- Cypress *(End to End tests for the UI)*
    |-- e2e *(Test files)*
    |-- fixtures *(static files with data used by the tests)*
    |-- pages *(Page objects)*
  |-- cypress.config.js *(Cypress configuration file)*
```

### Tech Stack

 - ![Cypress](https://img.shields.io/badge/code-cypress-b0e0df)
 - ![JavaScript](https://img.shields.io/badge/code-javascript-b0e0df)
 - ![Node](https://img.shields.io/badge/code-node14-b0e0df)

### Build
 - Install:
   - [NodeJS >=14](https://nodejs.org/en/)
   - Project dependency setup  
     - `cd Aviasales-Automation-UI---Cypress/` 
     - `npm install` 

### How to run the tests

 - In the project root:
   - Debug mode - Browser `npx cypress open`
     - Select E2E Testing
     - Start E2E Testing in Chrome
     - Click in searchForFlight.cy.js
   - Headless mode ` npx cypress run`

### What should be tested:

  ####  Task: implement web UI auto test for ticket search
  To do:
  - Navigate to https://www.aviasales.com/
  - Enable Night Theme
  - For FROM field set NEW York, Kennedy airport
  - For TO field set Berlin
  - For DATE field set October, 30
  - No returning ticket
  - Passengers – 2 adults, economy
  - Click search flight
  #### Assert that:
  - New search page is opened
  All previous data is displayed on the new page
  
  #### Additional requirements:
  - Browser - Chrome
  - Use JavaScript + framework you prefer (playwright as a plus)
  - Use public GIT (github, gitlab) repo to share results

### Note:
- I noticed when I select the departure date, it shows as  "Mon Oct 30 2023" but when I check
the date in the Search page the input value is "Mon, October 30" with no year and differente format. Is it a bug?
