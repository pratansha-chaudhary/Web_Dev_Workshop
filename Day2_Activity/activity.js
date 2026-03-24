const Student = {
    "name" :"Gauri Bhasme",
    "age" : 22,
    "rollNo" : 123,
    "marks":[80,70,50,70,65]
};

function calculateAvg(Student){

    let sum = 0;
    for (let mark of Student.marks){
        sum += mark;
    }

    return sum/Student.marks.length;
}

function calculateGrade(avgMarks){

    if(avgMarks>=90) return "A";
    else if(avgMarks>=80) return "B";
    else if(avgMarks>=70) return "C";
    else if(avgMarks>=60) return "D";
    else if(avgMarks>=50) return "E";
    else if(avgMarks>40) return "F";

}

const PASSING_MARKS = 40;

if(calculateAvg(Student) > PASSING_MARKS){
    console.log("PASS");
    console.log("Grade : ",calculateGrade(calculateAvg(Student)));
}
else{
    console.log("FAIL");
}



