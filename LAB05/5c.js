const Student = 
{
    firstName: "randomName",
    surname: "randomSurname",
    id: 0,
    grades: [],
}

const studentCreator = (numOfStudents) => 
{
    let firstNamesPool = ["Marry", "John", "Mark"];
    let surnamesPool = ["Doe", "Smith", "Brown"]
    let studentsToReturn = [];
    for(let i = 0; i < numOfStudents; i++)
    {
        let student = Object.create(Student);
        student.firstName = firstNamesPool[Math.floor(Math.random()*firstNamesPool.length)];
        student.surname = surnamesPool[Math.floor(Math.random()*surnamesPool.length)];
        student.id = i;
        studentsToReturn.push(student);
    }
    return studentsToReturn;
}
console.log(studentCreator(3));