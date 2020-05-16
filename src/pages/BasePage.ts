import { expect } from 'chai';

export default class BasePage {
  public getHeadingText() {
    return $('h1').getText();
  }

  public getTitleText() {
    return $('title').getText();
  }

  public closeWindow() {
    return browser.closeWindow();
  }

  public waitAndClick(element: WebdriverIO.Element) {
    browser.waitUntil(() => element.isDisplayed());
    element.click();
  }

  public waitFor(element: WebdriverIO.Element) {
    browser.waitUntil(() => element.isDisplayed());
  }

  public waitInDisplay(element: WebdriverIO.Element) {
    browser.waitUntil(() => element.isDisplayedInViewport());
  }

  public expectVisibleElement(element: WebdriverIO.Element) {
    this.waitFor(element);
    expect(element.isDisplayed()).to.equal(true);
  }

  public validateURL(text: string, element: WebdriverIO.Element) {
    this.waitFor($('h1'));
    expect(browser.getUrl()).to.contain(text);
  }
}
