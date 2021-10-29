class Person
{
    constructor(firstName, surname)
    {
        this.firstName = firstName;
        this.surname = surname;
    }

    get fullName()
    {
        return `${this.firstName} ${this.surname}`;
    }
    set fullName(inputName)
    {
        let splittedName = inputName.split(" ");
        this.firstName = splittedName[0];
        this.surname = splittedName[1];
    }
}
let person = new Person("Dann", "Smith");
console.log(person.fullName);
person.fullName = "Test1 blabla"
console.log(person.fullName);
class Student extends Person
{
    constructor(firstName, surname, id, grades)
    {
        super(firstName, surname);
        this.id = id;
        this.grades = grades;
    }    

    printFullInfo()
    {
        console.log(`${this.firstName} ${this.surname} avg grade: ${this.getAvgGrade()}`);
    }
    getAvgGrade()
    {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++)
        {
            sum += this.grades[i];
        }
        return sum/this.grades.length;
    }
    get averageGrade()
    {
        return this.getAvgGrade();
    }
}

let student = new Student("John", "Doe", 1, [1,1,1,2]);
console.log(student.fullName);
student.fullName = "Test2 blabla";
console.log(student.fullName);
console.log(student.averageGrade);