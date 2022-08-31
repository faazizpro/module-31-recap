const student = {
    name: 'fahad Abdul Aziz',
    age: 22,
    class: 'BBA',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 97
    },
}
const marks = student.marks;
const math = student.marks.math;

//Bracket Notation
const chemistry = student['marks']['chemistry'];
console.log(chemistry);

const subject = 'math';
const subjectMath = student.marks[subject];
console.log(subjectMath);