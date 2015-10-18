//DATABASE CLASS
// <script src="http://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
// <script type="text/javascript" src="http://www.parsecdn.com/js/parse-latest.js"></script>

Parse.initialize("wdkGsKtPWv1FWkivJZkTqjz2y79PhT8E1sW63MQD", "9jnDcwqrc5gmuf3np5KhoZXp1iJvkAbdfjuWu9Wz");

createParse("jatin", "available", "Klaus");
createParse("jatin1", "busy", "CoC");
createParse("jatin2", "available", "vanleer");


function createParse(name, availability, location) {
	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	// testObject.save([{"name": name}, {"pizzaPref": pizzaPref}, {"location" : location}], {
	testObject.save({"name": name}).then(function(object) {
	  testObject.save({"availability": availability}).then(function(object) {
	  	testObject.save({"location": location}).then(function(object) {
	  		alert("it definitely worked!");
	  	}
	)})});
	}	
