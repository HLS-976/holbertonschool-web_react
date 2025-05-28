interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any
};

interface Directors extends Teacher {
  numberOfReports: number;
};

interface PrintTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacher: PrintTeacher = function (firstName, lastName) {
  return `${firstName[0].toUpperCase()}. ${lastName}`;
}

const teacher3: Directors = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  numberOfReports: 17
};

const printName = printTeacher(teacher3['firstName'], teacher3['lastName']);

console.log(printName);
