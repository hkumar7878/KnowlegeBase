# Committing changes 

Feature: Application Login Feature Data Table
 
  Scenario: Application Login Test Scenario
    Given User is already on Login Page
    When Title of Login page is Pyd
   	Then User Enter username and password
   	| UserName    | Password    |
   	| hitesh.ghai | Pyramid123! |
   	
    Then User clicks on Login button
    And User is on Home Page
   	Then close the browser
