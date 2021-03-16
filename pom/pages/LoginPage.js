var BasePage = require('../../Utility/BasePage');

var LoginPage = function () {

    var lblHeaderName = element(by.xpath("//div/h2"));
    var txtUserName = element(by.id('txt-username'));
    var txtpassword = element(by.id('txt-password'));
    var btnLogin = element(by.id('btn-login'));

    this.VerifyTheHeaderOfLoginPage = function (headerName) {
        expect(headerName).toBe(lblHeaderName.getText(), "Error..! : Login page header not matched");
    }

    this.LoginToCura = function (userName, password) {
        BasePage.Type(txtUserName, userName);
        BasePage.Type(txtpassword, password);
        BasePage.Click(btnLogin);
    }
}
module.exports = new LoginPage();