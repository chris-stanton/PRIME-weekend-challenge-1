
$(document).ready(function(){

  $('#submitButton').on('click', function(){
//Stores input field to variable
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

//Total monthly average salary calculation - *broken need to fix*
    var singleMonthlySalary = annualSalary / 12;
    $('#container').text('Monthly Salary Expenditures: ' + singleMonthlySalary);

//Ties input values to specific table cell
    $('#firstNameContainer').append('<p> </p>' + '<button id="deleteButton">Delete</button>' + firstName);
    $('#lastNameContainer').append('<p> </p>' + lastName);
    $('#idNumberContainer').append('<p> </p>' + idNumber);
    $('#jobTitleContainer').append('<p> </p>' + jobTitle);
    $('#annualSalaryContainer').append('<p> </p>' + annualSalary);
//Deletes input value as a line - *broken fuction needs to be fixed*
    $('#firstNameContainer').on('click', '#deleteButton', function(){
      $(this).remove().val();
    });
  });
});


//.parentsUntil("table")
