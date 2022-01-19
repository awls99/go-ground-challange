import { BaseNHS } from "./base-nhs";
import * as webdriver from "selenium-webdriver";
import { WebElementPromise } from "selenium-webdriver";
import { DateOfBirth } from "./dateOfBirth";

export class Dental extends BaseNHS {

  readyElement(): WebElementPromise {
    return this.driver.findElement(webdriver.By.id("next-button"));
  }
  // todo not registered option
  // place this somewhere else so we don't duplicate code on Country.ts
  // but avoiding circular dependency for now
  async selectCountry(country: string): Promise<DateOfBirth> {
    await this.ready();
    const radio = this.driver.findElement(webdriver.By.id(`radio-${country.toLocaleLowerCase()}`));
    await radio.click();
    await this.readyElement().click();
    return new DateOfBirth(this.driver);
  }
}