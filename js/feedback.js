window.onload = startForm;

function startForm() {
  document.forms[0].onsubmit = feedBack;
}

function feedBack() {
  if (document.forms[0].email.value.length == 0) {
    alert("must have a first email");
    return false;
  } else if (document.forms[0].fname.value.length == 0) {
    alert("must have a last name");
    return false;
  } else if (document.forms[0].lname.value.length == 0) {
    alert("must have a city");
    return false;
  } else return true;
}
