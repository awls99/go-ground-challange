import { WebElementPromise } from "selenium-webdriver";
import { BaseNHS } from "./base-nhs";
import * as webdriver from "selenium-webdriver";
import { YesNo } from "./yes-no";
export class DateOfBirth extends BaseNHS {
  readyElement(): WebElementPromise {
    return this.driver.findElement(webdriver.By.id("next-button"));
  }
  //todo accept date of birth as a parameter
  async enterDate(): Promise<YesNo> {
    await this.ready();
    await this.driver.findElement(webdriver.By.id("dob-day")).sendKeys("01");
    await this.driver.findElement(webdriver.By.id("dob-month")).sendKeys("01");
    await this.driver.findElement(webdriver.By.id("dob-year")).sendKeys("1990");
    await this.readyElement().click();
    return new YesNo(this.driver);
  }
}