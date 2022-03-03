function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() 
    {

      let users = JSON.parse (this.responseText).user;
      
      let table = document.getElementById("table");

      users.forEach (function (element, index)
      {
        let row = table.insertRow (index + 1);
        insertCell(row, 0, "<button id='" + index + "'>Detalhe</button>");
        insertCell (row, 0, element.id);
        insertCell (row, 0, element.profession);
        insertCell (row, 0, element.password);
        insertCell (row, 0, element.name);
      })

      addEventButton(users);

    }
    xhttp.open("GET", "/listUsers");
    xhttp.send();
  }

  function insertCell(row, index, value) {
    var cell1 = row.insertCell(index);
    cell1.innerHTML = value;
}

function addEventButton(users) {
    users.forEach(function(element, index) {
        let btn = document.getElementById(index);
        btn.addEventListener("click", function() {
            document.getElementById('modal').style.display = 'block'
            document.getElementById('i-name').value = element.name;
            document.getElementById('i-password').value = element.password;
            document.getElementById('i-job').value = element.profession;
            document.getElementById('i-id').value = element.id;
        });
    });
  
  }

  loadDoc();