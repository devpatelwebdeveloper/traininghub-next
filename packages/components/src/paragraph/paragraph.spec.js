import { cy } from 'local-cypress';

describe('', () => {
  it('should be there', () => {
    cy.visitStorybook('Atoms', paragraph , 'Intro');
    cy.getByTestId('button').should('be.visible');
  });

  it('intro VRT', function () {
    cy.visualRegression('Atoms', paragraph , 'Intro');
  });

});