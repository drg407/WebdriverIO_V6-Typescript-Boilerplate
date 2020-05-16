# WebdriverIO_V6-Typescript-Boilerplate

This is a boilerplate project that uses WebdriverIO v6 and TypeScript v3. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Getting Started

```code
git clone https://github.com/drg407/WebdriverIO_V6-Typescript-Boilerplate.git
cd typescript-wdio-boilerplate
npm install
npm test
```

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are abstractions for the UI elements that you interact with in your tests. You can create getter functions for each element that you need to access. You can create convenient methods like `clickSignInButton()` which allow you to write more concise tests.

### `src/pages/LoginPage.ts`

```typescript
import BasePage from './BasePage';

class LandingPage extends BasePage {
  public openPage() {
    return browser.url('');
  }
  get headlineBanner() {
    return $('=Headlines');
  }
  get signInButton() {
    return $('//a[@class="gb_4 gb_5 gb_le gb_5c"]');
  }
  public clickSignInButton() {
    this.waitAndClick(this.signInButton);
  }
}
export default new LandingPage();
```

### `test/login.spec.ts`

```typescript
import { assert, expect } from 'chai';
import LandingPage from 'src/pages/LandingPage';


describe('Landing page', () => {
  it('should open', () => {
    browser.deleteAllCookies();
    LandingPage.openPage();
    expect(browser.getUrl()).to.contain('news.google.com');
  });

  it('should have a Headline Banner', () => {
    expect(LandingPage.headlineBanner.getText()).to.contain('Headlines');
  });

  it('should click to sign in', () => {
    LandingPage.clickSignInButton();
    expect(browser.getUrl()).to.contain('signin');
  });
});
```

## Test examples

The tests in this project use [https://news.google.com/](https://news.google.com/) to demonstrate how to interact with some of the most common UI elements you will encounter. I will try to add more from the [official documentation](https://webdriver.io/docs/api.html).

Run tests with the following command:

```code
npm test -- --spec=test/specs/landing.spec.ts
```

## CI examples

//TODO

## Reporters

This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html).  Run `npm run report` to generate the allure report.

## Acknowledgements

[jpolley](https://github.com/jpolley/WebdriverIO_v5_TypeScript) for writing the base boilerplate for this demo
