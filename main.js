const workers = [

]

const TableData = {
  serialNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  firstName: [
    "lawrence",
    "Akindoyegbe",
    "sholuade",
    "Babalola",
    "ogini",
    "Nicholas",
    "gboladeoye",
    "saheed",
    "Williams",
    "Enitan"
  ],
  lastName: [
    "Emmanuel",
    "Mary",
    "Elizabeth",
    "keheinde",
    "Mayowa",
    "Gbenga",
    "luckan",
    "Olayinka",
    "Onni",
    "Anjonla",
  ],
  age: [63, 53, 58, 49, 40, 47, 56, 44, 56, 11],
  sex: [
    "Male",
    "Female",
    "Female",
    "Male",
    "Male",
    "Female",
    "Male",
    "Male",
    "Female",
    "Male",
  ],
  position: [
    "director",
    "principal",
    "vice principal",
    "Adminstrative head",
    "Head of departmenr",
    "Secretary",
    "teaching staff",
    "non-teaching staff",
    "Prefects",
    "students",
  ], 
  dateEmployed: [
    "17/07/2014",
    "05/03/2019",
    "21/06/2016",
    "05/06/2016",
    "06/09/2015",
    "23/08/2016",
    "22/02/2020",
    "15/08/2020",
    "30/05/2018",
    "17/011/2010",
  ],
headings:[
    "No",
    "firstname",
    "Lastname",
    "age",
    "sex",
    "Position",
    "Date of registration ",
]

};
console.log(workers);



//headings
document.getElementById('staff__one').innerHTML = TableData.headings[0]
document.getElementById("staff__two").innerHTML=TableData.headings[1]
document.getElementById("staff__three").innerHTML =TableData.headings[2]
document.getElementById("staff__four").innerHTML =TableData.headings[3]
document.getElementById("staff__five").innerHTML=TableData.headings[4]
document.getElementById("staff__six").innerHTML =TableData.headings[5]
document.getElementById("staff__seven").innerHTML =TableData.headings[6]


//serial number
const staffOne = document.getElementById('staff__one-num')
staffOne.innerHTML = TableData.serialNumber[0];
const staffTwoNum = document.getElementById("staff_two-num");
staffTwoNum.innerHTML = TableData.serialNumber[1]
const staffthree =document.getElementById("staff__three-num")
staffthree.innerHTML = TableData.serialNumber[2];
const stafffour = document.getElementById("staff-four-num")
stafffour.innerHTML = TableData.serialNumber[3];
const staffFive = document.getElementById("staff-five-num")
staffFive.innerHTML=TableData.serialNumber[4];
const staff6ix = document.getElementById("staff-six-num")
staff6ix.innerHTML=TableData.serialNumber[5];
const staffseven = document.getElementById("staff-seven-num")
staffseven.innerHTML=TableData.serialNumber[6];
const staffeight = document.getElementById("staff-eight-num")
staffeight.innerHTML=TableData.serialNumber[7];
const staffnine = document.getElementById("staff-nine-num")
staffnine.innerHTML =TableData.serialNumber[8];
const stafften =document.getElementById("staff-ten-num")
stafften.innerHTML=TableData.serialNumber[9];



// firstName
const staffOneFirstName = document.getElementById('staff__one-firstname');
staffOneFirstName.innerHTML = TableData.firstName[0]
const staffTwoFirstname= document.getElementById("staff__two-firstname")
staffTwoFirstname.innerHTML=TableData.firstName[1]
const staffthreeFirstName= document.getElementById("staff__three-firstname")
staffthreeFirstName.innerHTML=TableData.firstName[2]
const stafffourFirstName= document.getElementById("staff-four-firstname");
stafffourFirstName.innerHTML=TableData.firstName[3]
document.getElementById("staff-five-firstname").innerHTML = TableData.firstName[4]
document.getElementById("staff-six-firstname").innerHTML = TableData.firstName[5]
document.getElementById("staff-seven-firstname").innerHTML = TableData.firstName[6]
document.getElementById("staff-eight-firstname").innerHTML = TableData.firstName[7]
document.getElementById("staff-nine-firstname").innerHTML = TableData.firstName[8]
document.getElementById("staff-ten-firstname").innerHTML = TableData.firstName[9]
// lastName
 document.getElementById('staff__one-lastname').innerHTML =TableData.lastName[0]
 document.getElementById('staff__two-lastname').innerHTML = TableData.lastName[1]
 document.getElementById('staff__three-lastname').innerHTML = TableData.lastName[2]
 document.getElementById('staff-four-lastname').innerHTML = TableData.lastName[3]
 document.getElementById('staff-five-lastname').innerHTML = TableData.lastName[4]
 document.getElementById('staff-six-lastname').innerHTML = TableData.lastName[5]
 document.getElementById('staff-seven-lastname').innerHTML = TableData.lastName[6]
 document.getElementById('staff-eight-lastname').innerHTML = TableData.lastName[7]
 document.getElementById('staff-nine-lastname').innerHTML = TableData.lastName[8]
 document.getElementById('staff-ten-lastname').innerHTML = TableData.lastName[9]
//Age
document.getElementById("staff__one-age").innerHTML = TableData.age[0]
document.getElementById('staff_two-age').innerHTML = TableData.age[1]
document.getElementById('staff__three-age').innerHTML = TableData.age[2]
document.getElementById('staff-four-age').innerHTML = TableData.age[3]
document.getElementById('staff-five-age').innerHTML = TableData.age[4]
document.getElementById('staff-six-age').innerHTML = TableData.age[5]
document.getElementById('staff-seven-age').innerHTML = TableData.age[6]
document.getElementById('staff-eight-age').innerHTML = TableData.age[7]
document.getElementById('staff-nine-age').innerHTML = TableData.age[8]
document.getElementById('staff-ten-age').innerHTML = TableData.age[9]

//sex
document.getElementById("staff__one-sex").innerHTML = TableData.sex[0]
document.getElementById('staff__two-sex').innerHTML = TableData.sex[1]
document.getElementById('staff__three-sex').innerHTML = TableData.sex[2]
document.getElementById('staff-four-sex').innerHTML = TableData.sex[3]
document.getElementById('staff-five-sex').innerHTML = TableData.sex[4]
document.getElementById('staff-six-sex').innerHTML = TableData.sex[5]
document.getElementById('staff-seven-sex').innerHTML = TableData.sex[6]
document.getElementById('staff-eight-sex').innerHTML = TableData.sex[7]
document.getElementById('staff-nine-sex').innerHTML = TableData.sex[8]
document.getElementById('staff-ten-sex').innerHTML = TableData.sex[9]

//position
document.getElementById("staff__one-position").innerHTML = TableData.position[0]
document.getElementById('staff__two-position').innerHTML = TableData.position[1]
document.getElementById('staff__three-position').innerHTML = TableData.position[2]
document.getElementById('staff-four-position').innerHTML = TableData.position[3]
document.getElementById('staff-five-position').innerHTML = TableData.position[4]
document.getElementById('staff-six-position').innerHTML = TableData.position[5]
document.getElementById('staff-seven-position').innerHTML = TableData.position[6]
document.getElementById('staff-eight-position').innerHTML = TableData.position[7]
document.getElementById('staff-nine-position').innerHTML = TableData.position[8]
document.getElementById('staff-ten-position').innerHTML = TableData.position[9]

//date of employment
document.getElementById("staff__one-date").innerHTML =TableData.dateEmployed[0]
document.getElementById('staff__two-date').innerHTML = TableData.dateEmployed[1]
document.getElementById('staff__three-date').innerHTML = TableData.dateEmployed[2]
document.getElementById('staff-four-date').innerHTML = TableData.dateEmployed[3]
document.getElementById('staff-five-date').innerHTML = TableData.dateEmployed[4]
document.getElementById('staff-six-date').innerHTML = TableData.dateEmployed[5]
document.getElementById('staff-seven-date').innerHTML = TableData.dateEmployed[6]
document.getElementById('staff-eight-date').innerHTML = TableData.dateEmployed[7]
document.getElementById('staff-nine-date').innerHTML = TableData.dateEmployed[8]
document.getElementById('staff-ten-date').innerHTML = TableData.dateEmployed[9]