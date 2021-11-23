it('should check that 7+2 equals 9', () => {
  //tell cypress where it needs to go (the website URL/or live server IP if not hosted)
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#seven').click();
  cy.get('#plus').click();
  cy.get('#two').click();
  cy.get('#equals').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '9');
});

it('should check that 4*9 equals 36', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#four').click();
  cy.get('#multiply').click();
  cy.get('#nine').click();
  cy.get('#equals').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '36');
});

it('should check that 10/2 equals 5', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#one').click();
  cy.get('#zero').click();
  cy.get('#divide').click();
  cy.get('#two').click();
  cy.get('#equals').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '5');
});

it('should check that 50/7 equals 43', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#five').click();
  cy.get('#zero').click();
  cy.get('#minus').click();
  cy.get('#seven').click();
  cy.get('#equals').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '43');
});

it('should check that the AC button clears the screen', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#one').click();
  cy.get('#plus').click();
  cy.get('#two').click();
  cy.get('#clear').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '');
});

it('should check that the AC button clears the screen', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#one').click();
  cy.get('#plus').click();
  cy.get('#two').click();
  cy.get('#clear').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '');
});

it('should check that the % button divides by 100', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#one').click();
  cy.get('#percent').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-current').should('contain', '0.01');
});

it('should check that pressing two operators successively displays the second operator on screen', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#one').click();
  cy.get('#multiply').click();
  cy.get('#divide').click();
  //   cy.get('#divide').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-previous').should('contain', '/');
});

it('should check that if the equals button is pressed without the user inputting a second number the screen output will not change', () => {
  cy.visit('http://127.0.0.1:54934/');
  // we need to select the elements needed in our test
  cy.get('#six').click();
  cy.get('#multiply').click();
  cy.get('#equals').click();
  //   cy.get('#divide').click();
  // select the output element and the value is should contain
  cy.get('.calculator__screen__output-previous').should('contain', '6 x');
});
