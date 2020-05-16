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
