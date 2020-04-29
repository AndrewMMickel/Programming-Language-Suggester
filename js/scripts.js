$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var Q1 = $("select#Q1").val();
    var Q2 = $("select#Q2").val();
    var Q3 = $("select#Q3").val();
    var Q4 = $("select#Q4").val();
    var Q5 = $("select#Q5").val();

        if (Q1 === 'Yes' && Q3 === '0' && Q4 === 'Lenovo') {
          var coding = "javascript"
        }

        $("#coding").text(coding);
        $('#result').show()

        event.preventDefault();
  });
});