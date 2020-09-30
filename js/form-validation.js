// JavaScript Document

// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='wu-rfx-application']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
	  contact_email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      website: "required",
      location: "required",
      company_problem: "required",
      solution: "required",
      solution_relevant: "required",
      previous_relationship: "required",
      relationship_goals: "required",
      competitor_1: "required",
      accProg: "required",
      revenue_last_year: "required",
      revenue_current: "required",
      investment_raised: "required",
      key_customers_1: "required",
	  additional_info: "required",

    },
    // Specify validation error messages
    messages: {
      name: "Enter your name",
      contact_email: "Enter a valid contact email",
      website: "Enter your company website",
      location: "Enter your company location",
      solution: "This field is required",
      solution_relevant: "This field is required",
      previous_relationship: "This field is required",
      relationship_goals: "This field is required",
      competitor_1: "Enter at least three competitors",
      accProg: "Please select either 'Yes' or 'No'",
      revenue_last_year: "Enter your revenue from last year",
      revenue_current: "Enter your current revenue",
      investment_raised: "This field is required",
      key_customers_1: "Enter at least three key customers",
	  additional_info: "Please enter additional inoformation",
	  
	  
	  
	  
	  
	  
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});