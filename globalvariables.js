function globalvariables () {

	// Environment Details
	//********************* Dev Env ********************//
	this.baseURL = "https://katalon-demo-cura.herokuapp.com/";

	this.UserName = "John Doe"
	this.Password = "ThisIsNotAPassword"

	this.LangingPageHeader = "CURA Healthcare Service"
	this.LoginPageHeader = "Login"
	this.MakeAppointmentPageHeader = "Make Appointment"
	//this.Date = "03/03/2021"
	this.Comment = "I need to make an appointment"
	this.AppointmentConfirmationHeader = "Appointment Confirmation"
}
module.exports = new globalvariables();