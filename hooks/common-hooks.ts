import { CustomWorld } from '../world';
import { Before, BeforeAll, After } from '@cucumber/cucumber';

Before({ tags: '@ignore' }, async function () {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return 'skipped' as any;
});

Before({ tags: '@debug' }, async function (this: CustomWorld) {
  this.debug = true;
});

BeforeAll(async function () {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

After(async function (this: CustomWorld)  {
  // eslint-disable-next-line no-console
  console.log('After');
  this.driver.quit();
});
