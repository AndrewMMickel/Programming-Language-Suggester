$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var Q1 = $("select#Q1").val();
    var Q2 = $("select#Q2").val();
    var Q3 = $("select#Q3").val();
    var Q4 = $("select#Q4").val();
    var Q5 = $("select#Q5").val();

        if (Q1 === 'Yes' && Q2 === 'software programming' && Q3 === '0-1' && Q4 === 'Lenovo' && Q5 === 'Yes') {
            var coding = "javascript";
        }
        //else if (Q1 === 'No' && Q2 === 'web design' && Q3 === '0-1' && Q4 === 'Lenovo' && Q5 === 'Yes') {
            //var coding = "Ruby"
        //}

        $("#coding").text(coding);
        $('#result').show()

        event.preventDefault();
  });
});