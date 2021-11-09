/// <reference types="cypress" />

Given(/^que eu acesso a calculadora$/, () => {
	cy.visit('/')
});

And(/^desejo realizar uma "([^"]*)"$/, (operacaoDesejada) => {
    let operador;
    switch (operacaoDesejada) {
        case 'soma':
            operador = '+'
            break;
        case 'subtração':
            operador = '-'
            break;
        case 'multiplicação':
            operador = 'x'
            break;
        case 'divisão':
            operador = '÷'
            break;
        default:
            break;
    }

	Cypress.env('operador', operador)
});

When(/^informar os valores "([^"]*)" e "([^"]*)"$/, (primeiroValor,segundoValor) => {
	cy.get('div[class="button"], .button.zero').as('valores');
    cy.get('.operator').as('operadores');

    //Informar valor 1
    cy.get('@valores').contains(primeiroValor).click()
    //Clicar na operação
    cy.get('@operadores').contains(`${Cypress.env('operador')}`).click()
    //Informar o valor 2
    cy.get('@valores').contains(segundoValor).click()

});

And(/^Finaliza a conta$/, () => {
	cy.get('@operadores').contains('=').click();
});

Then(/^devo obter o resultado "([^"]*)"$/, (resultadoEsperado) => {
	cy.get('.display').as('resultado');

    cy.get('@resultado')
        .invoke('text') //Retorna o valor de texto
        .should('be.equal', resultadoEsperado)
});
