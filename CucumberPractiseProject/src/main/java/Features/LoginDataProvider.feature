Feature: Application Login Feature


 # with Example Keyword
 
 
  Scenario Outline: Application Login Test Scenario
    Given User is already on Login Page
    When Title of Login page is Pyd
   	Then User Enter "<username>" and "<password>"
    Then User clicks on Login button
    And User is on Home Page
   	Then close the browser


Examples:

	| username | password |
	| hitesh.ghai | Pyramid123! |
 