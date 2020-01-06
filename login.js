
function check()
{
    var password=document.getElementById('password').value;
    var username=document.getElementById('username').value;

    var max=12;
    var min=6;
    var length=password.length;

    var r=/^[a-zA-Z]+[a-zA-Z0-9,@,.,_]$/;

    if(password=="" || username=="")
    {
        alert("Can not be blank");
    }

    else if(!r.test(username))
    {
        alert("Please Enter Correct UserName and start with alphabets!!!");
    }
    
    else if(length>=12 || length<=6)
    {
       alert("Password Length must be between 6 to 12");
    }
   
    else
    {
        alert("Successfully Submitted!!!!");
    }
    
}
    