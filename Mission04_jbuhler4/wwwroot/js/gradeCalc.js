//listens for when the submit button is clicked.
$("#btnsubmit").click(function () {
    //recieves all of the data from the form
    let assignment = parseInt($("#assignment").val());
    let project = parseInt($("#project").val());
    let quiz = parseInt($("#quiz").val());
    let midterm = parseInt($("#midterm").val());
    let final = parseInt($("#final").val());
    let intex = parseInt($("#intex").val());

    //calculates grade total
    let total = ((assignment * .5) + (project * .1) + (quiz * .1) + (midterm * .1) + (final * .1) + (intex * .1)).toFixed(2);

    //assigns letter grade
    let grade = "";
    if (total >= 94) {
        grade = "A"
    } else if (total >= 90) {
        grade = "A-"
    } else if (total >= 87) {
        grade = "B+"
    } else if (total >= 84) {
        grade = "B"
    } else if (total >= 80) {
        grade = "B-"
    } else if (total >= 77) {
        grade = "C+"
    } else if (total >= 74) {
        grade = "C"
    } else if (total >= 70) {
        grade = "C-"
    } else if (total >= 67) {
        grade = "D+"
    } else if (total >= 64) {
        grade = "D"
    } else if (total >= 60) {
        grade = "D-"
    } else {
        grade = "E"
    }

    //outputs result
    alert("Your total percentage is: " + total +"\nWhich makes your final grade: " + grade);
});
