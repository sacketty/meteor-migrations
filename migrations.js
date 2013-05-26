Meteor.migrations = new Meteor.Collection('migrations');

var consoleMessage = function(message) {	
	var remainingLength = 74;
	message = "//     " + message + "     //";

	remainingLength = remainingLength - message.length;
	var startLength = Math.floor(remainingLength / 2) - 1;
	var endLength = Math.ceil(remainingLength / 2) - 1;

	console.log("//----------------------------------------------------------------------//");
	console.log("//" + Array(startLength).join("-") + message + Array(endLength).join("-") + "//");
	console.log("//----------------------------------------------------------------------//");
};

Meteor.Migrations = {
	up: function(name, callback) {
		if ( ! Meteor.migrations.findOne({name: name})) {
			consoleMessage("Starting " + name + " Migration");
			
			var done = callback();

			if (done) {
				Meteor.migrations.insert({name: name, failed: false});
				consoleMessage("Ending " + name + " Migration")
			}
			else {
				Meteor.migrations.insert({name: name, failed: true});
				consoleMessage("Fail!: " + name + " Migration")
			}
		}
	} 
}