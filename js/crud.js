let students = [];

let selectedIndex = -1;

function addStudent() {

    let studentsName = document.getElementById("username").value;
    let studentsSurname = document.getElementById("surname").value;
    let studentsBirthDate = document.getElementById("date").value;
    let typeStuding = document.getElementById("kontrakt").value;

    document.getElementById("username").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("date").value = "";
    document.getElementById("kontrakt").value = "";


    let student = {
        username: studentsName,
        surname: studentsSurname,
        birthday: studentsBirthDate,
        studing: typeStuding
    };


    if (selectedIndex >= 0){
        products[selectedIndex] =  student;
        selectedIndex = -1
    }else {
        products.push( student)
    }

    aboutStudent()
}

function aboutStudent() {
    let result = "";

    for (let i = 0;i < students.length;i++){
        result +=
            "<tr>" +
            "<td> "+(i + 1)+" </td>" +
            "<td> "+students[i].username+" </td>" +
            "<td> "+students[i].surname+" </td>" +
            "<td> "+students[i].birthday+" </td>" +
            "<td> "+students[i].studing+" </td>" +
            "<td><button type='button' class='btn btn-success' onclick='editStudent("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger ml-2' onclick='deleteStudent("+ i +")'>Delete</button>" +
            "</td>" +
            "</tr>"
    }
    document.getElementById("result").innerHTML = result;
}

  function editStudent(index) {

      document.getElementById("username").value = students[index].username;
      document.getElementById("surname").value = students[index].surname;
      document.getElementById("date").value = students[index].birthday;
      document.getElementById("kontrakt").value = students[index].studing;

      selectedIndex = index;
  }

  function deleteStudent(index) {
    students.splice(index,1);
      aboutStudent()
  }

