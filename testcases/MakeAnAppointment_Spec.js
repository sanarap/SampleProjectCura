const GlobalData = require('../globalvariables');
const AppointmentConfirmationPage = require('../pom/pages/AppointmentConfirmationPage');
const LandingPage = require('../pom/pages/LandingPage');
const LoginPage = require('../pom/pages/LoginPage');
const MakeAppointmentPage = require('../pom/pages/MakeAppointmentPage');

describe("Make an Appointment", function () {

    beforeEach = function () {
        LandingPage.NagivateToCuraWebSite(GlobalData.baseURL);
    }

    it("Verify the appointment details", function () {

        LandingPage.VerifyTheHeaderOfLandingPage(GlobalData.LangingPageHeader);
        LandingPage.ClickToMakeAppointment();

        LoginPage.VerifyTheHeaderOfLoginPage(GlobalData.LoginPageHeader);
        LoginPage.LoginToCura(GlobalData.UserName, GlobalData.Password);

        MakeAppointmentPage.VerifyTheHeaderOfMakeAppointmentPage(GlobalData.MakeAppointmentPageHeader);
        MakeAppointmentPage.MakeAnAppointment(GlobalData.Comment);

        AppointmentConfirmationPage.VerifyTheHeaderOfAppointmentConfPage(GlobalData.AppointmentConfirmationHeader);
    });
});