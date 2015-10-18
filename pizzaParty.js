$("#submitButton").click(function () {
    var name = $("#name").val();
    if (name == '') {
        alert("require name");
    } else {
        alert(name);
    }
});