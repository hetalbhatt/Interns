//Function to validate username and password
function validate() {
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");
    var text1 = document.getElementById("uname").value;
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (username.value.trim() == "" || password.value.trim() == "") {
        alert("No blank values allowed!!");
        return false;
    }
    else if (password.value.trim().length < 5) {
        alert("Password is not strong!");
        pass.style.border = "solid 3px red";
        return false;
    }
    else if (regx.test(text1)) {
        document.getElementById("lbuser").style.visibility = "visible";
        uname.style.border = "solid 3px green";
        return true;
    }
    else if (!regx.test(text1)) {
        alert("Invalid username!!");
        document.getElementById("lbuser").style.visibility = "visible";
        document.getElementById("lbuser").style.color = "red";
        uname.style.border = "solid 3px red";
        return false;
    }
    else {
        return true;
    }
}
