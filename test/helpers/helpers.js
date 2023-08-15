class Helpers {
    constructor(driver) {
        this.driver = driver;
    }

    async waitElementInDisplay(selector) {
        console.log('Aguardando o carregamento...');
        await this.driver.waitUntil(async () => {
            const element = await this.driver.$(selector);
            return await element.isDisplayed();
        }, { timeout: 10000 });
    }

    async screenshot(imageName) {
        const fs = require('fs');
        // Set up the connection to the Appium server
        try {
            // Take a screenshot
            const screenshot = await this.driver.takeScreenshot();

            // Save the screenshot to a file
            fs.writeFileSync(imageName, screenshot, 'base64');

            console.log('Screenshot captured successfully!');
        } catch (error) {
            console.error('An error occurred while capturing the screenshot:', error);
        }
    }
}

module.exports = { Helpers }