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

const teacher3: Directors = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
  numberOfReports: 17
};

console.log(teacher3);
