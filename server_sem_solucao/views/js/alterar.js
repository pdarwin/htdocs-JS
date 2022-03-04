document.getElementById('change').addEventListener("click", function() {

    document.getElementById('modal').style.display = 'none';
    var name = document.getElementById('i-name').value;
    var password = document.getElementById('i-password').value;
    var id = document.getElementById('i-id').value;

    if (name != "" && password != "")
    {
        var data = 'password=' + password + '&id=' + id + '&name=' + name;


        const xhttp = new XMLHttpRequest();
        xhttp.open('POST', "/setUser");
        xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    
        xhttp.onload = function() {
            console.log(this.responseText);
        }
    
        xhttp.send(data);

        document.location.reload();
    
    }
    
    if (name == "")
    {   
        document.getElementById('i-name').style.border=1;
        document.getElementById('i-name').style.borderColor="red";  
        document.getElementById('modal').style.display = "block";
    }
    
    if (password == "")
    {
        document.getElementById('i-password').style.border=1;
        document.getElementById('i-password').style.borderColor="red";
        document.getElementById('modal').style.display = "block";
    }


});