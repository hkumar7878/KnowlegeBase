$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hiteshg/git/CucumberPractise/CucumberPractiseProject/src/main/java/Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Application Login Feature",
  "description": "",
  "id": "application-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 22,
  "name": "Application Login Test Scenario",
  "description": "",
  "id": "application-login-feature;application-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "Title of Login page is Pyd",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Enter \"hitesh.ghai\" and \"Pyramid123!\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_On_login_page()"
});
formatter.result({
  "duration": 59507154829,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_pyd()"
});
formatter.result({
  "duration": 26931440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hitesh.ghai",
      "offset": 12
    },
    {
      "val": "Pyramid123!",
      "offset": 30
    }
  ],
  "location": "LoginStepDefinition.user_Enter_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 956906897,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 6022099144,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 188046577,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 913436183,
  "status": "passed"
});
});