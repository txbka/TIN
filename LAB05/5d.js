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
    Object.defineProperties(this,
    {
        averageGrade:
        {
            get: function()
            {
                return this.getAvgGrade();
            }
        },
        fullName: 
        {
            get: function()
            {
                return `${this.firstName} ${this.surname}`;
            },
            set: function(inputName)
            {
                let splittedName = inputName.split(" ");
                this.firstName = splittedName[0];
                this.surname = splittedName[1];
            },
        },
    });
}

let student = new Student("John", "Doe", 1, [1,1,1,2]);
console.log(student.fullName);
student.fullName = "Test blabla"
console.log(student.fullName);
console.log(student.averageGrade);