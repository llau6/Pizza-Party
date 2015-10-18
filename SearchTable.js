function addToList(name, location, availability) {
    $("#searchTable").append('<tr><td><button id="messageButton" type="button"><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Email-icon.png" width="20" height="20"></button></td><td>'+name+'</td><td>'+location+'</td><td>'+availability+'</td></tr>');
}

addToList("Jerry", "Student Center", "Free");
addToList("Eve", "CULC", "Busy");
addToList("Jerry", "Student Center", "Free");
addToList("Jerry", "Student Center", "Free");
addToList("Jerry", "Student Center", "Free");
