@nhs
Feature: NHS Costs calculator
  AS A person from Wales (UK)
  I NEED to know what help I can get with my NHS (UK national health system) costs
  SO THAT I can get the treatment I need

  Background: Open the NHS costs calculator
    Given I navigate to NHS Costs tool

  Scenario: Being from Wales (UK)
    Given I am a person from Wales
    When I put my circumstances into the Checker tool
    Then I should get a result of whether I can get help or not

