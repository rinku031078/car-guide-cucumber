$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Find the dealers and verify the dealers are in the list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click on \u0027Find a Dealer\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \u0027Car Dealers\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should see the dealers names \"\u003cDealers Name\u003e\" are display on page",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;",
  "rows": [
    {
      "cells": [
        "Dealers Name"
      ],
      "line": 12,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;1"
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 13,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;2"
    },
    {
      "cells": [
        "4WDD Spec"
      ],
      "line": 14,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;3"
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 15,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;4"
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 16,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;5"
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 17,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;6"
    },
    {
      "cells": [
        "ANDREA MOTOR SERVICE"
      ],
      "line": 18,
      "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-the-list;;7"
    }
  ],
  "keyword": "Examples"
});
