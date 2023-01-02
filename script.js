
var errorText = document.getElementById("error");


function matching(form) {
    var pw = form.pw.value;
    var pwRe = form.pwRe.value;
    if (pw != '' && pwRe != '') {
        if (pw != pwRe) {
            errorText.innerText = "Passwords do not match";
            return false;
        }
        else {
            errorText.innerText = "";
            return true;
        }
    }
}