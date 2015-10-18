
function createParse(name, availability, location) {
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	// testObject.save([{"name": name}, {"pizzaPref": pizzaPref}, {"location" : location}], {
	testObject.save({"name": name}).then(function(object) {
	  testObject.save({"availability": availability}).then(function(object) {
	  	testObject.save({"location": location}).then(function(object) {
	  		//switch to next screen
	  		window.location = "PeopleSearch.html";
	  	}
	)})});
}

$("#refresh").click(function() {
	loadFromDB();
})
$("#submitButton").click(function () {
    var name = $("#name").val()
    var location = $("#location option:selected").text();
    if (name == '') {
        alert("require name");
    } else {
    	createParse(name, "available", location);
    }
});

//adds to the UI list
function addToList(name, location, availability) {
    $("#searchTable").append('<tr><td><button id="messageButton" style="background-color:#8C7A6B" type="button"><img src=pizza.png width="30" height="30"></button></td><td>'+name+'</td><td>'+location+'</td><td>'+availability+'</td></tr>');
    $("tr:even").css("background-color", "#4E5166");
    $("tr").css("line-height:100");

}

function loadFromDB() {
	var query = new Parse.Query("TestObject");
	query.limit = 100;
	query.find().then(function(results) {
	    results.forEach(function(e, i) {
	    	addToList(e.get("name"), e.get("location"), e.get("availability"));
	    });
	});
}

