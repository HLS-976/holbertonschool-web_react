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

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
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
