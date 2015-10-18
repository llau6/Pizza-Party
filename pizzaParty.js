
function createParse(name, availability, location) {
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	var code = randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
	// testObject.save([{"name": name}, {"pizzaPref": pizzaPref}, {"location" : location}], {
	testObject.save({"name": name}).then(function(object) {
	  testObject.save({"availability": availability}).then(function(object) {
	  	testObject.save({"location": location}).then(function(object) {
	  		testObject.save({"urlCode": code}).then(function(object) {
	  		//switch to next screen
	  		window.location = "PeopleSearch.html";
	  	}
	)})})});
}

$("#submitButton").click(function() {
    var name = $("#name").val()
    var location = $("#location option:selected").text();
    if (name == '') {
        alert("require name");
    } else {
    	createParse(name, "available", location);
    }
});

//generates random string for chatroom
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

//adds to the UI list
function addToList(name, location, availability, code, i) {
	//initalizes chatroom
    $("#searchTable").append('<tr><td><button id= '+i+' type="button"><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Email-icon.png" width="20" height="20"></button></td><td>'+name+'</td><td>'+location+'</td><td>'+availability+'</td></tr>');
    $("#" + i).click(function() {
					window.location.href = 'https:/' + '/tlk.io/' + code;
				});
}

function loadFromDBInit() {
	var query = new Parse.Query("TestObject");
	query.limit = 100;
	query.find().then(function(results) {
	    results.forEach(function(e, i) {
	    	addToList(e.get("name"), e.get("location"), e.get("availability"), e.get("urlCode"), i);
	    });
	});
}


