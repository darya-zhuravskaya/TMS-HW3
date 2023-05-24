const student = {
    name: 'John',
    age: 19,
    isHappy: true
}
for (const studentKey in student){
    console.log(studentKey);
    console.log(student[studentKey])
}
