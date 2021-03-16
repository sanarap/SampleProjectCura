var BasePage = require('../../Utility/BasePage');

var AppointmentConfirmationPage = function () {

    var lblHeaderName = element(by.xpath("//div/h2"));

    this.VerifyTheHeaderOfAppointmentConfPage = function (headerName) {
        expect(headerName).toBe(lblHeaderName.getText(), "Error..! : Login page header not matched");
    }

}
module.exports = new AppointmentConfirmationPage();