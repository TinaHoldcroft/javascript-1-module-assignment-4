//Create an event that triggers off a button click. Use a JavaScript Alert to display success.

var alertButton = document.getElementById("alert-button");
    alertButton.addEventListener('click', function (x) {
        alert("Success!");
        x.stopPropagation();
});