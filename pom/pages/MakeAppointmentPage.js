const { element } = require('protractor');
var BasePage = require('../../Utility/BasePage');

var MakeAppointmentPage = function () {

    var lblHeaderName = element(by.xpath("//div/h2"));
    var drpFacility = element(by.id('combo_facility'));
    var chkApply = element(by.id('chk_hospotal_readmission'));
    var radioHealthProgram = element(by.id('radio_program_medicaid'));
    var txtDate = element(by.id('txt_visit_date'));
    var txtComment = element(by.id('txt_comment')); 
    var btnBookAppointment = element(by.id('btn-book-appointment'));
  
    this.VerifyTheHeaderOfMakeAppointmentPage = function (headerName) {
        expect(headerName).toBe(lblHeaderName.getText(), "Error..! : Make Appintment page heade not matched");
    }

    this.MakeAnAppointment = function(comment){
        BasePage.CheckElementClickable(drpFacility);
        drpFacility.$('[value="Hongkong CURA Healthcare Center"]').click();
        BasePage.Click(chkApply);
        BasePage.Click(radioHealthProgram);
        browser.executeScript(txtDate.value='02/03/2021');
        BasePage.Type(txtComment, comment);
        BasePage.CheckElementClickable(btnBookAppointment);
        BasePage.Click(btnBookAppointment);
    }
}
module.exports = new MakeAppointmentPage();