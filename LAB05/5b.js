function Student(firstName, surname, id, grades)
{
    this.firstName = firstName;
    this.surname = surname;
    this.id = id;
    this.grades = grades;

    this.printFullInfo = function() 
    {
        console.log(`${this.firstName} ${this.surname} avg grade: ${this.getAvgGrade()}`);
    }
    this.getAvgGrade = function()
    {
        let sum = 0;
        for (let i = 0; i < this.grades.length; i++)
        {
            sum+= grades[i];
        }
        return sum/this.grades.length;
    }
}

let student = new Student("John", "Doe", 1, [1,1,1,2]);
student.printFullInfo();