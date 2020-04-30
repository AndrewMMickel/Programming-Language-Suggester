$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var Q1 = $("select#Q1").val();
    var Q2 = $("select#Q2").val();
    var Q3 = $("select#Q3").val();
    var Q4 = $("select#Q4").val();
    var Q5 = $("select#Q5").val();
    var coding;

        if (Q1 === 'Yes' && Q2 === 'web design' && Q3 === '0-1') {
            coding = "java";
        }
        else if (Q1 === 'No' && Q2 === 'web design' && Q3 === '0-1') {
            coding = "Java"
        }
        else if (Q1 === 'No' && Q2 === 'web design' && Q3 === '2-3') {
            coding = "C#"
        }

        else if (Q1 === 'Yes' && Q2 === 'journalism' && Q3 === '0-1') {
            coding = "Ruby"
        }
        else if (Q1 === 'No' && Q2 === 'journalism' && Q3 === '0-1') {
            coding = "Ruby"
        }
        else if (Q1 === 'No' && Q2 === 'journalism' && Q3 === '2-3') {
            coding = "Python"
        }

        else if (Q1 === 'Yes' && Q2 === 'programming' && Q3 === '0-1') {
            coding = "Java"
        }
        else if (Q1 === 'No' && Q2 === 'programming' && Q3 === '0-1') {
            coding = "Java"
        }
        else if (Q1 === 'No' && Q2 === 'programming' && Q3 === '2-3') {
            coding = "Javascript"
        }

        $("#coding").text(coding);
        $('#result').show()

        event.preventDefault();
  });
});