function loadDoc() {
  
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {

    let users = JSON.parse(this.responseText).user;

    buildTable(users);

    addEventButton(users);
    addEventRefresh();
    addEventShowRows(users);

  }
  xhttp.open("GET", "/listUsers");
  xhttp.send();
}

function buildTable(users) {
  let table = document.getElementById("table");

  var today = new Date();

  users.forEach(function (element, index) {
    let row = table.insertRow(index + 1);
    insertCell(row, 0, "<button id='" + index + "'>Detalhe</button>");
    insertCell(row, 0, today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear());
    insertCell(row, 0, element.id);
    insertCell(row, 0, GetPwdHash(element.password));
    insertCell(row, 0, element.profession);
    insertCell(row, 0, element.name);
    row.cells[0].style.backgroundColor = "cadetblue";
    row.cells[0].style.textTransform = "uppercase";

  })
}

function insertCell(row, index, value) {
  var cell1 = row.insertCell(index);
  cell1.innerHTML = value;
}

function GetPwdHash(pwd) {
  length = pwd.length;
  hash = "";
  for (i = 0; i < length; i++) {
    hash += "*";
  }
  return hash;
}

function addEventRefresh() {
  let btn = document.getElementById("refresh");
  btn.addEventListener("click", function () {
    document.location.reload();
  });
}

function addEventShowRows(users)
{
  
  for (i = 0; i < 3; i++) 
  {
    bname = "b" + i;
    let btn = document.getElementById(bname);
    btn.addEventListener("click", function () 
    {
      showOneLineTable (users, i);
    });
  };
}

function showOneLineTable (users, index)
{

  let table = document.getElementById("table");

  element = users[index];
  let row = table.insertRow(index);
  insertCell(row, 0, "<button id='" + index + "'>Detalhe</button>");
  insertCell(row, 0, today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear());
  insertCell(row, 0, element.id);
  insertCell(row, 0, GetPwdHash(element.password));
  insertCell(row, 0, element.profession);
  insertCell(row, 0, element.name);
  row.cells[0].style.backgroundColor = "cadetblue";
  row.cells[0].style.textTransform = "uppercase";

  xhttp.open("GET", "/listUsers");
  xhttp.send();

}

function addEventButton(users) {
  users.forEach(function (element, index) {
    let btn = document.getElementById(index);
    btn.addEventListener("click", function () {
      document.getElementById('modal').style.display = 'block'
      document.getElementById('i-name').value = element.name;
      document.getElementById('i-password').value = element.password;
      document.getElementById('i-id').value = element.id;
    });
  });

}

loadDoc();