//Checking of Fisrt name field
function checkFirst() {
    var first = document.getElementById("first").value;
    var regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Все верно!";
        return true;
    }
    else {// if it's not
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Напишите Имя корректно!";
        return false;
    }
}


//Checking of Last name field
function checkLast() {
    var last = document.getElementById("last").value;
    var regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { // if testing of first is true
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Всё верно!";
        return true;
    }
    else {// if it's not
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Напишите Фамилию корректно!";
        return false;
    }
}

//Checking of Destination field
function checkDest() {
    var dest = document.getElementById("dest").value;
    var regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { // if testing of dest is true
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Всё верно!";
        return true;
    }
    else {// if it's not
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Напишите назначение корректно!";
        return false;
    }
}

//Checking of Phone number field
function checkPhone() {
    var phone = document.getElementById("phone").value;
    var regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Всё верно!";
        return true;
    }
    else {// if it's not
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Напишите номер корректно!";
        return false;
    }
}



//Collect and output all the data
function outputData() {
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var dest = document.getElementById("dest").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var dateAndTime = date + " at " + time;
    var quantity = document.getElementById("quantity").value;
    var paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "black";
        document.getElementById("summary").innerHTML = "Hello, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p>Phone number: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Destination: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Date and Time: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Number of people: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Payment Method: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services :)</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}
