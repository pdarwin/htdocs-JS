document.getElementById('change').addEventListener("click", function() {

    document.getElementById('modal').style.display = 'none';
    var name = document.getElementById('i-name').value;
    var password = document.getElementById('i-password').value;
    var job = document.getElementById('i-job').value;
    var id = document.getElementById('i-id').value;

    var data = 'password=' + password + '&id=' + id + '&name=' + name + '&profession=' + job;


    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', "/setUser");
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    xhttp.onload = function() {
        console.log(this.responseText);
    }

    xhttp.send(data);

    document.location.reload();

});