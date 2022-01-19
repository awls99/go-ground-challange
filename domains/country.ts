import { WebElementPromise } from "selenium-webdriver";
import { BaseNHS } from "./base-nhs";
import { GP } from "./GP";
import * as webdriver from "selenium-webdriver";

export class Country extends BaseNHS {
  readyElement(): WebElementPromise {
    return this.driver.findElement(webdriver.By.id("next-button"));
  }

  async selectCountry(country: string): Promise<GP> {
    await this.ready();
    const radio = this.driver.findElement(webdriver.By.id(`radio-${country.toLocaleLowerCase()}`));
    await radio.click();
    await this.readyElement().click();
    return new GP(this.driver);
  }
}