//DATABASE CLASS


function createParse(name, availability, location) {
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	// testObject.save([{"name": name}, {"pizzaPref": pizzaPref}, {"location" : location}], {
	testObject.save({"name": name}).then(function(object) {
	  testObject.save({"availability": availability}).then(function(object) {
	  	testObject.save({"location": location}).then(function(object) {
	  		alert("it definitely worked!");
	  		window.location = "PeopleSearch.html";
	  	}
	)})});
}


$("#submitButton").click(function () {
    var name = $("#name").val()
    var location = $("#location option:selected").text();
    if (name == '') {
        alert("require name");
    } else {
    	console.log(location);
    	createParse(name, "available", location);
    }
});
