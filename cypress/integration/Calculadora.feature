Feature: Calculadora

    Como usuário, desejo utilizar a Calculadora
    Para que possa conferir minhas contas

Scenario: Calcular uma operacao de valores
    Given que eu acesso a calculadora
    And desejo realizar uma "soma"
    When informar os valores "4" e "9"
    And Finaliza a conta
    Then devo obter o resultado "13"
