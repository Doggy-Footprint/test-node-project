type Person = {
    name: string;
    age: number;

    // uncomment propA in Person and Employee, and EmployedPerson to see error
    // propA: string;

    propB: string | number;

    // uncomment propC in Person and Employee, and EmployedPerson to see error
    // propC?: string;

    // this is optional in EmployedPerson
    propD?: string;

    // this is required in EmployedPerson
    propE?: string;

    common: {
        // this is number in EmployedPerson
        innerA: string | number;
    }
};
  
type Employee = {
    employeeId: number;
    department: string;
    
    // uncomment propA in Person and Employee, and EmployedPerson to see error
    // propA: number

    propB: number;

    // uncomment propC in Person and Employee, and EmployedPerson to see error
    // propC: number;

    propE: string;

    common: {
        innerA: number;
        innerB: string;
    }
};

type EmployedPerson = Person & Employee;

const john: EmployedPerson = {
    name: "John Doe",
    age: 30,
    employeeId: 1234,
    department: "Engineering",

    // uncomment propA in Person and Employee, and EmployedPerson to see error
    // propA: 32

    propB: 50,

    // uncomment propC in Person and Employee, and EmployedPerson to see error
    // propC: 30

    propE: 'abc',

    common: {
        innerA: 32,
        innerB: 'abc'
    }
};

type F1 = (a: string | number) => string;
type F2 = (a: number) => string;

type FI = F1 & F2;

const sampleFunction: FI = (a) => {
    return `typeof a is ${typeof a}`;
}

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

    console.log(`---Various cases of merging types see test_intersection.ts for detail---`);

    console.log(
`Intersection test - function

type F1 = (a: string | number) => string;
type F2 = (a: number) => string;

type FI = F1 & F2;

---Sample function intersection variable---
sampleFunction('abc') result in ${sampleFunction('abc')}
sampleFunction(50) result in ${sampleFunction(50)}

! note that intersection in function type result in including both
Intersection of function type is as same as overloading
`)
}

