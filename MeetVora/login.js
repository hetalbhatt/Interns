const validate = () => {
    let id = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/

    if (!emailRegex.test(id)) {
        alert("Wrong Email Format")
        return false;
    }
    if (pass.length == 0) {
        alert("Enter Password")
        return false;
    } else {
        location.href = "../coffee/coffee.html"
        return true;
    }
}