// LoginPage.js
const { Helpers } = require('../helpers/helpers');
const { HomePage } = require('../pages/homePage');
const { expect } = require('chai');

class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  //Elements
  emailInput() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText';
  }

  passwordInput() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText';
  }

  loginButton() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.widget.Button';
  }

  ignoreUpdateBtn() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button';
  }

  quadrinhosHome() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button';
  }

  //actions
  async ignoreIfPresent() {
    try {
      let updatePopUp = await this.driver.$(this.ignoreUpdateBtn());
      await updatePopUp.click();
    } catch (error) {
      console.log('Popup de nova versão não apresentado');
    }
  }

  async fillEmail(email) {
    console.log('Preenchendo E-mail');
    const emailField = await this.driver.$(this.emailInput());
    await emailField.setValue(email);
  }

  async fillPassword(password) {
    console.log('Preenchendo senha');
    const fieldPassword = await this.driver.$(this.passwordInput());
    await fieldPassword.setValue(password);
  }

  async clickLoginButton() {
    const helpers = new Helpers(this.driver);
    await helpers.waitElementInDisplay(this.loginButton());
    const btnLogin = await this.driver.$(this.loginButton());
    await btnLogin.click();
  }

  //methods
  async login(cpf, password) {
    console.log('Iniciando processo de login');
    await this.ignoreIfPresent();
    await this.fillEmail(cpf);
    await this.fillPassword(password);
    await this.clickLoginButton();
    console.log('Processo de login finalizado');
  }

  async validateLogged() {
    console.log('Iniciando validação se o usuário está logado');
    const homePage = new HomePage(this.driver);
    const helpers = new Helpers(this.driver);
    await helpers.waitElementInDisplay(homePage.quadrinhosTextHome());
    const textHomeFatura = await this.driver.$(homePage.quadrinhosTextHome());
    const text = await textHomeFatura.getText();
    const expectedText = 'Quadrinhos';
    console.log(`Texto Esperado: ${expectedText}`);
    expect(text).to.equal('Quadrinhos');
    console.log(`Texto Encontrado: ${text}`);
    console.log('Usuário logado com sucesso');
  }
}

module.exports = { LoginPage };
