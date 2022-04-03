const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

function validate() {
  var uname = document.getElementById("uname").value;
  var pass = document.getElementById("pass").value;
  if (uname == "admin" && pass == "user") {
    alert("login succesfully");
    return true;
  } else {
    alert("login failed");
  }
}
