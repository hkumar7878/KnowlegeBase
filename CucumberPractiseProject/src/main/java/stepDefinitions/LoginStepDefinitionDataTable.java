package stepDefinitions;

//import java.util.List;

import java.util.List;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefinitionDataTable {
	
	WebDriver driver;
	//Step definition file
	String currentDir;
	boolean flag;
	
	@Given("^User is already on Login Page$")
	public void user_is_already_on_Login_Page() throws Throwable {
	
		currentDir = System.getProperty("user.dir");
		String chromeDriverLocation = currentDir + "/BrowsersExe/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation );
		driver= new ChromeDriver();
		driver.get("http://pyramidcore.pyramidci.com/Security/PCILoginNew.aspx");
	}
	
	@When("^Title of Login page is Pyd$")
	public void title_of_Login_page_is_Pyd() throws Throwable {
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("PyramidCore-Login",title);
	}
	
	@Then("^User Enter username and password$")
	public void user_Enter_username_and_password(DataTable credentials)  {
		
		List<List<String>> data=credentials.raw();
	
	   driver.findElement(By.id("pydLogin_txtUserid")).sendKeys(data.get(1).get(0));
	   driver.findElement(By.id("pydLogin_txtUserPwd")).sendKeys(data.get(1).get(1));
	}

	@Then("^User clicks on Login button$")
	public void user_clicks_on_Login_button() throws Throwable  {
	 
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
	public void close_the_browser() throws Throwable 
	{
		driver.quit();
	}
	

}