//Here am Using If functions to come up with the Grading System.
function gradeRemarks(score) {
    if (score >= 90 && score <= 100) {
        console.log("A: Excellent");
    } 
    else if (score >= 80 && score <= 89) {
        console.log("B: Good");
    } 
    else if (score >= 70 && score <= 79) {
        console.log("C: Fair");
    } 
    else if (score >= 60 && score <= 69) {
        console.log("D: Pass");
    } 
    else if (score < 60) {
        console.log("F: Fail");
    } 
    else {
        console.log("Invalid score");
    }
}
let score = 75;
gradeRemarks(score); 