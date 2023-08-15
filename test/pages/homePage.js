// HomePage.js
const { Helpers } = require('../helpers/helpers');
const { expect } = require('chai');

class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  //Elements
  quadrinhosTextHome() {
    return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View[1]/android.widget.TextView';
  }
}

module.exports = { HomePage };
