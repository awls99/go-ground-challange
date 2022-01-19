import { CustomWorld } from '../world';
import { Given, Then, When } from '@cucumber/cucumber';
import expect from 'expect';
import { Start } from '../domains/start';
import { GP } from '../domains/GP';
import { Result } from '../domains/result';

Given('I navigate to NHS Costs tool', async function (this: CustomWorld) {
  this.driver.get("https://services.nhsbsa.nhs.uk/check-for-help-paying-nhs-costs/start");
});

// todo make wales a parameter
Given('I am a person from Wales', async function (this: CustomWorld) {
  const start = new Start(this.driver);
  await start.startNow();
  const country = await start.startNow();
  await country.selectCountry("Wales");
});


When('I put my circumstances into the Checker tool', async function (this: CustomWorld) {
  const gp = new GP(this.driver);
  const dental = await gp.yes();
  const dob = await dental.selectCountry("Wales");
  const questions = await dob.enterDate();
  await questions.many("no",8);
});

Then('I should get a result of whether I can get help or not', async function (this: CustomWorld) {
  const result = new Result(this.driver);
  expect(await result.canSeeResult()).toBe(true);
});