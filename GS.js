//Using Switches To come up with a simple Grading System
function getGradeRemark(score) {
    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("A: Excellent");
            break;
        case (score >= 80 && score <= 89):
            console.log("B: Good");
            break;
        case (score >= 70 && score <= 79):
            console.log("C: Fair");
            break;
        case (score >= 60 && score <= 69):
            console.log("D: Pass");
            break;
        case (score < 60):
            console.log("F: Fail");
            break;
        default:
            console.log("Invalid score");
    }
}
let score = 60;
getGradeRemark(score); 