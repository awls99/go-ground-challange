import { WebElementPromise } from "selenium-webdriver";
import { BaseNHS } from "./base-nhs";
import * as webdriver from "selenium-webdriver";
import { Country } from "./country";

export class Start extends BaseNHS {
  readyElement(): WebElementPromise {
    return this.driver.findElement(webdriver.By.id("next-button"));
  }

  async startNow(): Promise<Country> {
    await this.ready();
    await this.readyElement().click();
    return new Country(this.driver);
  }
}