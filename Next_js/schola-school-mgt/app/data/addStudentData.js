export const countryCodes = [
    { id: 1, code: "+91", country: "India" },
    { id: 2, code: "+1", country: "United States" },
    { id: 3, code: "+44", country: "United Kingdom" },
    { id: 4, code: "+39", country: "Italy" },
    { id: 5, code: "+62", country: "Indonesia" },
    { id: 6, code: "+971", country: "UAE" },
];

export const gradeOptions = ["7", "8", "9", "10", "11", "12"];

export const sectionOptions = ["A", "B", "C", "D"];

export const genderOptions = ["Male", "Female"];

export const relationOptions = ["Father", "Mother", "Aunt", "Uncle", "Guardian"];

export const initialStudentForm = {
    studentId: "S-2111",
    fullName: "Olivia Bennett",
    dateOfBirth: "2023-08-21",
    gender: "Female",
    profilePhoto: null,

    email: "olivia.bennett@student.studiax.org",
    countryCode: "+44",
    phoneNumber: "3456 78901",
    address: "Street, City, State, ZIP",

    fatherName: "Henry Bennett",
    fatherCountryCode: "+44",
    fatherPhone: "79001 11223",

    motherName: "Laura Bennett",
    motherCountryCode: "+44",
    motherPhone: "79001 11235",

    guardianName: "Amelia Reese",
    guardianRelation: "Aunt",
    guardianCountryCode: "+44",
    guardianPhone: "79355 56677",

    admissionNumber: "ADM-1009",
    grade: "7",
    section: "B",
    enrollmentDate: "2035-03-05",
    previousSchool: "",

    hobbies: "Painting, Robotics, and Reading Novels",
    specialNeedsSupport: false,
    medicalConditionAlert: true,
    medicalNote: "Mild asthma - requires inhaler during sports activities",
};
