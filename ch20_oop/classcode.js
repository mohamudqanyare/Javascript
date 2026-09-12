// Parent class
class HospitalStaff {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(
      `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`,
    );
  }
}

// Doctor class inherits from HospitalStaff
class Doctor extends HospitalStaff {
  constructor(firstName, lastName, age, specialization) {
    // Call the parent class constructor
    super(firstName, lastName, age);

    this.specialization = specialization;
  }

  treatPatient() {
    console.log(
      `Dr. ${this.firstName} is treating a patient. Specialization: ${this.specialization}`,
    );
  }
}

// Nurse class inherits from HospitalStaff
class Nurse extends HospitalStaff {
  constructor(firstName, lastName, age, department) {
    // Call the parent class constructor
    super(firstName, lastName, age);

    this.department = department;
  }

  careForPatient() {
    console.log(
      `Nurse ${this.firstName} is caring for a patient in the ${this.department} department.`,
    );
  }
}

// Creating Doctor objects
let doctor1 = new Doctor("Mohamud", "Qanyare", 30, "Cardiology");

let doctor2 = new Doctor("Hassan", "Jama", 35, "Surgery");

let doctor3 = new Doctor("Dahir", "Ali", 38, "Neurology");

// Creating Nurse objects
let nurse1 = new Nurse("Amina", "Hassan", 28, "Emergency");

let nurse2 = new Nurse("Fatima", "Ali", 32, "Pediatrics");

// Using inherited method
doctor1.introduce();
doctor1.treatPatient();

doctor2.introduce();
doctor2.treatPatient();

doctor3.introduce();
doctor3.treatPatient();

nurse1.introduce();
nurse1.careForPatient();

nurse2.introduce();
nurse2.careForPatient();
