function register() {
    var name = document.getElementById("ename").value;
    var phno = document.getElementById("mobile").value;
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("confirmPassword").value;
    var out = document.getElementById("output").value;
    var rs = document.getElementById("results").value;

    var OTPGEn = Math.random() * (9999 - 1000) + 1000;
    var OTP = Math.floor(OTPGEn)

    if (name == "" || phno == "" || pass1 == "" || pass2 == "") {
      document.getElementById("results").innerHTML =
        "* All fields are mandotory";
      if (pass1 != pass2) {
        document.getElementById("output").innerHTML = "* Password Unmatched";
      }
    } else {
      if (pass1 != pass2) {
        document.getElementById("output").innerHTML = "Password Unmatched";
      }
      else{
      document.getElementById("results").innerHTML =
        "<h2 style='color: green;'>Account Created Successfully! OTP is "+OTP+"</h2>"
    }
  }
  }

  function reset() {
    document.getElementById("ename").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("confirmPassword").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("results").innerHTML = "";
  }