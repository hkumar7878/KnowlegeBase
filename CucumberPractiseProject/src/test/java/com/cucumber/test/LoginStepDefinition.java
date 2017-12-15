package com.cucumber.test;
/*package stepDefinitions;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinition {
	
	WebDriver driver;
	//Step definition file
	String currentDir;
	boolean flag;
	
	@Given("^User is already on Login Page$")
	public void user_already_On_login_page()
	{
		currentDir = System.getProperty("user.dir");
		String chromeDriverLocation = currentDir + "/BrowsersExe/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation );
		driver= new ChromeDriver();
		driver.get("http://pyramidcore.pyramidci.com/Security/PCILoginNew.aspx");
	}
	
	@When("^Title of Login page is Pyd$")
	public void title_of_login_page_is_pyd()
	{
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("PyramidCore-Login",title);
	}
	
	@Then("^User Enter \"(.*)\" and \"(.*)\"$")
	public void user_Enter_Username_and_Password(String userName, String passWord)  {
	    // Write code here that turns the phrase above into concrete actions
	   driver.findElement(By.id("pydLogin_txtUserid")).sendKeys(userName);
	   driver.findElement(By.id("pydLogin_txtUserPwd")).sendKeys(passWord);
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button()  {
	 
	    driver.findElement(By.id("pydLogin_btnLogin")).click();
	}

	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page() {
	    // Write code here that turns the phrase above into concrete actions
		
		String loginText=driver.findElement(By.xpath("//span[@id='pydLogin_lblPostLogin']")).getText();
		if(loginText.contains("hitesh"))
			flag=true;
		else 
			flag=false;
		Assert.assertTrue(flag);
		System.out.println("Login text contains Logged in user name");
		
	    
	}
	
	@Then("^close the browser$")
	
	public void close_browser()
	{
		driver.quit();
	}
	

}
*/