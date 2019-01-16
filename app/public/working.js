$("#submit").on("click", function(event) {
  event.preventDefault();

  //Make sure all questions were answered
  function validateForm() {
    var isValid = true;

    //go thorugh each question to make sure it was answered 
    $(".form-control").each(function() {
      if ($(this).val() === "Select an option") {
        isValid = false;
      }
    });
    return isValid;
  }

  //if everything is good then create POST.
  if (validateForm()) {

    //values of all of the answers 
    var userData = {
      name: $("#survey_name").val(),
      photo: $("#survey_link").val(),
      scores: [
        $("#survey_q1").val(),
        $("#survey_q2").val(),
        $("#survey_q3").val(),
        $("#survey_q4").val(),
        $("#survey_q5").val(),
        $("#survey_q6").val(),
        $("#survey_q7").val(),
        $("#survey_q8").val(),
        $("#survey_q9").val(),
        $("#survey_q10").val()
      ]
    };

    
    $.post('/api/friends', userData)
      //Receives confirmation of POST + best match user and image.
      .done(function(data) {


        $('#user-match').html(data.matchName);
        $("#image-match").attr("src", data.matchImage);
       
        $('#results-modal').modal('toggle');
      });
  }
  //alert if something went wrong 
  else {
    alert("Please fill out all fields before submitting.")
  }
})