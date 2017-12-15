package com.cucumber.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * 
 * @author HG
 *
 */


@CucumberOptions(
	
		//features = "C://Users//hiteshg//git//CucumberPractise//CucumberPractiseProject//src//main//java//Features//LoginDataTable.feature",
		features={"src/main/java/Features/LoginDataTable.feature"},
	
				glue={"stepDefinitions"},// the path of step definition file
				//format={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_sel/cucumber.sel"},// To generate different kind of output report
				format={"json:target/cucumber.json","html:target/site/cucumber-pretty"} ,
				monochrome=true,// display the console output in proper readable output
				//plugin = {"html:target/cucumber-html-report", "json:target/cucumber-json-report.json" }
				strict=true, // It will check if steps def is not defined inside Step definition file
				dryRun=false // to check the mapping is proper between feature file and step def file
				//Committing 12/15
			
)
public class TestRunnerTestNG extends AbstractTestNGCucumberTests{
	
	
}
