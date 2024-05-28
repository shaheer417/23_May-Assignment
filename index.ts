// // Question 1

type People = {
  friends: string | number[];
};

let people: { friends: any[] } = {
  friends: [],
};

let friendOne = {
  firstName: "Shummas",
  LastName: "Niazi",
  ID: 1233262325,
};
let friendTwo = {
  firstName: "Sharjeel",
  LastName: "Niazi",
  ID: 265562,
};
let friendThree = {
  firstName: "Safdar",
  LastName: "Niazi",
  ID: 556623269,
};

people.friends.push(friendOne, friendTwo, friendThree);

console.log(people);

// ===================================================================================

// // Question 2

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];

const myFilteredArr = scrambledArray.filter(
  (item) => typeof item === "string"
) as string[];

// console.log(myFilteredArr);

const resultArray = [
  myFilteredArr[5], // "I"
  myFilteredArr[2], // "am"
  myFilteredArr[3], // "a"
  myFilteredArr[0], // "student"
  myFilteredArr[1], // "of"
  myFilteredArr[4], // "GIAIC"
];

const resultString = resultArray.join(" ");

console.log(resultString);

//=========================================================================

// // Question 3

const inevntory = [];

let product1 = {
  name: "xyz",
  model: 2022,
  cost: 2000,
  quantity: 100,
};
let product2 = {
  name: "abc",
  model: 2018,
  cost: 3999,
  quantity: 50,
};
let product3 = {
  name: "def",
  model: 1992,
  cost: 999,
  quantity: 20,
};

inevntory.push(product1, product2, product3);

console.log(inevntory[2].quantity);
console.log(inevntory[0].cost);

//===========================================================================

// // Question 4

interface Student {
  name: string;
  seniorStatus: boolean;
  AssignmentStatus: boolean;
}

let classStudents: Student[] = [
  {
    name: "Safdar",
    seniorStatus: true,
    AssignmentStatus: true,
  },

  {
    name: "Ali",
    seniorStatus: false,
    AssignmentStatus: true,
  },

  {
    name: "Ahmed",
    seniorStatus: false,
    AssignmentStatus: false,
  },
];

function seniorAssignment(student: Student) {
  if (student.seniorStatus && student.AssignmentStatus === true) {
    console.log(`${student.name}, is hardworking`);
  } else {
    console.log(`${student.name}, not submitted his assignments `);
  }
}

seniorAssignment(classStudents[0]);
seniorAssignment(classStudents[1]);

function removeStudent(student: Student) {
  classStudents = classStudents.filter(
    (student) => student.AssignmentStatus === false
  );
  return classStudents;
}

let removedStudent = removeStudent(classStudents[2]);

console.log(removedStudent);
