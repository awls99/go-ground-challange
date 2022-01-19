import { WebElementPromise } from "selenium-webdriver";
import { BaseNHS } from "./base-nhs";
import * as webdriver from "selenium-webdriver";
import { Result } from "./result";

export class YesNo extends BaseNHS {
  readyElement(): WebElementPromise {
    return this.driver.findElement(webdriver.By.id("next-button"));
  }
  //todo better generic
  async yes(nextPage:any = this): Promise<any> {
    return this.decision("yes", nextPage);
  }
  async no(nextPage: any = this): Promise<any> {
    return this.decision("no", nextPage);
  }

  private decisionElement(yn:string){
    return this.driver.findElement(webdriver.By.id(`radio-${yn}`));
  }

  // I'm going to take a short cut here and allow many replies in a row
  // 8 times in a row gives result
  async many(yn:string, count:number):Promise<Result> {
    for(let i=0; i<count; i++){
      await this.decision(yn);
      if(i !== 7){
        await this.ready();
      }
    }
    return new Result(this.driver);
  }
//todo better generics
  async decision(yn:string, nextPage:any = this):Promise<any> {
    await this.ready();
    await this.decisionElement(yn).click();
    await this.readyElement().click();
    return nextPage;
  }

}
