const studentID = 1;
const studentName = "So Phorn";
const studentGender = "Male";
const sutdentSubject = "Web Development";
const studentPayment = 1000;

const studentFormated = studentID.toString().padStart(3, "0");
const formattedPayment = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(studentPayment);

const studentDetails = [
    { label: "My personal studentId", value: studentFormated },
    { label: "My personal studentName", value: studentName },
    { label: "My personal studentGender", value: studentGender },
    { label: "My personal studentSubject", value: sutdentSubject },
    { label: "My personal studentPayment", value: formattedPayment },
];

let studentInfo = "";
studentDetails.forEach((detail, index) => {
    studentInfo += `<p>${index + 1}. ${detail.label} : ${detail.value}</p>`;
});

document.getElementById("studentInfo").innerHTML = studentInfo;

studentDetails.forEach((detail, index) => {
    console.log(`${index + 1}. ${detail.label} : ${detail.value}`);
});

alert(
    `1. My personal studentId : ${studentFormated}\n2. My personal studentName : ${studentName}\n3. My personal studentGender : ${studentGender}\n4. My personal studentSubject : ${sutdentSubject}\n5. My personal studentPayment : ${formattedPayment}`
);
