const studentID = 12345;
const studentName = "So Phorn";
const studentGender = "Male";
const sutdentSubject = "Web Development";
const studentPayment = 1000;

const studentInfo = `
    <p>1. My personal studentId : ${studentID}</p>
    <p>2. My personal studentName : ${studentName}</p>
    <p>3. My personal studentGender : ${studentGender}</p>
    <p>4. My personal studentSubject : ${sutdentSubject}</p>
    <p>5. My personal studentPayment : ${studentPayment}</p>
`;

document.getElementById("studentInfo").innerHTML = studentInfo;

console.log(`1. My personal studentId : ${studentID}`);
console.log(`2. My personal studentName : ${studentName}`);
console.log(`3. My personal studentGender : ${studentGender}`);
console.log(`4. My personal studentSubject : ${sutdentSubject}`);
console.log(`5. My personal studentPayment : ${studentPayment}`);

alert(
    `1. My personal studentId : ${studentID}\n2. My personal studentName : ${studentName}\n3. My personal studentGender : ${studentGender}\n4. My personal studentSubject : ${sutdentSubject}\n5. My personal studentPayment : ${studentPayment}`
);
