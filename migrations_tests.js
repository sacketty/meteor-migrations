Tinytest.add("Migrations collection works", function(test) {
	test.equal(Meteor.migrations.find({}).count(), 0);

	Meteor.Migrations.up('createPosts', function() {
		return true;
	});
	
	test.equal(Meteor.migrations.find({}).count(), 1);

	Meteor.migrations.remove({});
});