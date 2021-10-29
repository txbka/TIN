const person = 
{
    firstName: "Tomek",
    surname: "Kikuła",
    age: 21,
    setName: (newName) => 
    {
        this.firstName = newName;
    },
    getFullInfo: () =>
    {
        return firstName + surname + age;
    }
}
const printFullInfo = (person) =>
{
    console.log(`firstName ${person.firstName} is of type ${typeof person.firstName}`);
    console.log(`surname ${person.surname} is of type ${typeof person.surname}`);
    console.log(`age ${person.age} is of type ${typeof person.age}`);
}

printFullInfo(person);

