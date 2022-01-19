import { WebElementPromise } from "selenium-webdriver";
import { BaseNHS } from "./base-nhs";
import * as webdriver from "selenium-webdriver";

export class Result extends BaseNHS {
  readyElement(): WebElementPromise {
    return this.driver.findElement(webdriver.By.id("result-heading"));
  }

  async canSeeResult(): Promise<boolean> {
    await this.ready();
    return await this.readyElement().isDisplayed();
  }

}