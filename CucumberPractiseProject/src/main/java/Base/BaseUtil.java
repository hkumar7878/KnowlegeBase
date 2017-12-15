package Base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class BaseUtil {
	public WebDriver driver;
	String currentDir;
	
	/*@BeforeTest
	public void InitilizeTest()
	{
		currentDir = System.getProperty("user.dir");
		String chromeDriverLocation = currentDir + "/BrowsersExe/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation );
	    driver= new ChromeDriver();
		//driver.get("http://pyramidcore.pyramidci.com/Security/PCILoginNew.aspx");
	}
	*/
	
	/*public void initializeTestBaseSetup()
	{
		currentDir = System.getProperty("user.dir");
		String chromeDriverLocation = currentDir + "/BrowsersExe/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation );
	    driver= new ChromeDriver();
	}*/
	
	public BaseUtil()
	{
		currentDir = System.getProperty("user.dir");
		String chromeDriverLocation = currentDir + "/BrowsersExe/chromedriver.exe";
		System.setProperty("webdriver.chrome.driver",chromeDriverLocation );
	    driver= new ChromeDriver();
	}
	@After
	public void TearDownTest(Scenario scenario)
	{
		if(scenario.isFailed())
		{
			
		}
	}
}
