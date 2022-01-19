import { Dental } from "./dental";
import { YesNo } from "./yes-no";

export class GP extends YesNo {
  async decision(yn: string): Promise<Dental> {
    const dental = new Dental(this.driver);
    const result = await super.decision(yn, dental);
    return result as Dental;
  }
  // for type signature
  async yes(): Promise<Dental> {
    return this.decision("yes");
  }
  async no(): Promise<Dental> {
    return this.decision("no");
  }
}