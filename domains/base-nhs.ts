import { WebDriver } from "selenium-webdriver";
import * as webdriver from "selenium-webdriver";

export abstract class BaseNHS {
  driver: WebDriver;
  session: webdriver.Session | undefined;
  constructor(driver?: WebDriver) {
    this.driver = driver || new webdriver.Builder().forBrowser('chrome').build();
  }
  async startSession() {
    if (this.session) {
      return this.session
    }
    this.session = await this.driver.getSession();
    return this.session;
  }

  async okCookies() {
    try {
      const button = this.driver.findElement(webdriver.By.id("nhsuk-cookie-banner__link_accept_analytics"));
      if (await button.isDisplayed()) {
        button.click();
      }
    } catch (e) {
      // do nothing cookie banner not displayed
    }
  }

  async ready() {
    await this.startSession();
    await this.okCookies();
    return this.driver.wait(webdriver.until.elementIsVisible(this.readyElement()));
  }

  readyElement() {
    return this.driver.findElement(webdriver.By.id("logo"));
  }

}
