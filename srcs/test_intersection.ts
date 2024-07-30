type Person = {
    name: string;
    age: number;
};
  
type Employee = {
    employeeId: number;
    department: string;
};

type EmployedPerson = Person & Employee;

const john: EmployedPerson = {
    name: "John Doe",
    age: 30,
    employeeId: 1234,
    department: "Engineering"
};

export default function test_intersection() {
    console.log('---test intersection---');

    console.log(
    `Intersection test
    type Person = {
        name: string;
        age: number;
    };
      
    type Employee = {
        employeeId: number;
        department: string;
    };
    
    type EmployedPerson = Person & Employee;
    
    ---Sample EmployedPerson variable---
    name: ${john.name}
    age: ${john.age}
    employeeId: ${john.employeeId}
    department: ${john.department}`);
}

