package com.cucumber.test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import Base.BaseUtil;

public class Hook{

	/*public BaseUtil base;
	String currentDir;
	public WebDriver driver;
	public Hook(BaseUtil base)
	{
		this.base=base;
		
	}*/
	
	/*@Before
	public void InitilizeTest()
	{
		currentDir = System.getProperty("user.dir");
		String chromeDriverLocation = currentDir + "/BrowsersExe/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation );
	    base.driver= new ChromeDriver();
		//driver.get("http://pyramidcore.pyramidci.com/Security/PCILoginNew.aspx");
	}
	
	@After
	public void TearDownTest(Scenario scenario)
	{
		if(scenario.isFailed())
		{
			
		}
	}*/
}
