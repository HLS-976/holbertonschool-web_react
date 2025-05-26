interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentList: Student[] = [];

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

studentList.push(student1);
studentList.push(student2);

console.log(studentList);

const table: HTMLTableElement = document.createElement("table");
const headerRow: HTMLTableRowElement = document.createElement("tr");

const firstNameHeader: HTMLTableCellElement = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader: HTMLTableCellElement = document.createElement("th");
locationHeader.textContent = "Location";

studentList.forEach((student: Student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  const locationCell: HTMLTableCellElement = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
