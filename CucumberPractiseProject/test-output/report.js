$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/Features/LoginDataTable.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Committing changes"
    }
  ],
  "line": 3,
  "name": "Application Login Feature Data Table",
  "description": "",
  "id": "application-login-feature-data-table",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Application Login Test Scenario",
  "description": "",
  "id": "application-login-feature-data-table;application-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of Login page is Pyd",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Enter username and password",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 9
    },
    {
      "cells": [
        "hitesh.ghai",
        "Pyramid123!"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 70062167163,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.title_of_Login_page_is_Pyd()"
});
formatter.result({
  "duration": 34790220,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_Enter_username_and_password(DataTable)"
});
formatter.result({
  "duration": 3110908327,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 9855525626,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 158423918,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinitionDataTable.close_the_browser()"
});
formatter.result({
  "duration": 845788592,
  "status": "passed"
});
});