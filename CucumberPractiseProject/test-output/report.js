$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/hiteshg/git/CucumberPractise/CucumberPractiseProject/src/main/java/Features/LoginDataTable.feature");
formatter.feature({
  "line": 1,
  "name": "Application Login Feature",
  "description": "",
  "id": "application-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Application Login Test Scenario",
  "description": "",
  "id": "application-login-feature;application-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of Login page is Pyd",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User Enter username and password",
  "rows": [
    {
      "cells": [
        "hitesh.ghai",
        "Pyramid123!"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_already_On_login_page()"
});
formatter.result({
  "duration": 102963956211,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.title_of_login_page_is_pyd()"
});
formatter.result({
  "duration": 193498309,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_Enter_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 6210783005,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 1, Size: 1\r\n\tat java.util.ArrayList.rangeCheck(Unknown Source)\r\n\tat java.util.ArrayList.get(Unknown Source)\r\n\tat java.util.Collections$UnmodifiableList.get(Unknown Source)\r\n\tat stepDefinitions.LoginStepDefinitionDataTable.user_Enter_Username_and_Password(LoginStepDefinitionDataTable.java:50)\r\n\tat ✽.Then User Enter username and password(C:/Users/hiteshg/git/CucumberPractise/CucumberPractiseProject/src/main/java/Features/LoginDataTable.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});