const { remote } = require('webdriverio');
const { expect } = require('chai');
const { LoginPage } = require('./pages/loginPage');

describe('Feature: Validação de Login do APP Marvelopedia', function () {
    let driver;
    this.timeout(30000);

    beforeEach(async function () {
        const opts = require('../config/wdio.conf').config; // Load the configuration from the wdio.conf.js file
        this.timeout(30000);
        driver = await remote(opts);
    });

    it('Validar login com sucesso @loginSuccess1', async function () {
        const loginPage = new LoginPage(driver);
        await loginPage.login('abc@gmail.com', '123456');
        await loginPage.validateLogged();
    });

    afterEach(async function () {
        await driver.closeApp();
        await driver.deleteSession();
    });
});
