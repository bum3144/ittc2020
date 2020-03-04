function makeStudent(name, kor, eng, math){
    return {
        "name": name,
        "kor": kor,
        "eng": eng,
        "math": math
    };
}
// object array - use makeStudent
var students = [
    makeStudent('jeremy', 100, 100, 100),
    makeStudent('scepter', 90, 70, 50),
    makeStudent('lilian', 90, 80, 70),
    makeStudent('john', 40, 70, 70)
];
console.log("===== forEach() =====");
students.forEach(function (stu){
    console.log(stu.name, stu.kor, stu.eng, stu.math);
});
