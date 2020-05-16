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
