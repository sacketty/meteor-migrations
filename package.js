Package.describe({
	summary: "A pattern for migrations in Meteor."
});

Package.on_use(function (api, where) {
	api.use(['minimongo', 'mongo-livedata'], 'server');

	api.add_files(['migrations.js'], 'server');
});

Package.on_test(function(api) {
	api.use('migrations', 'server');
	api.use(['tinytest', 'test-helpers'], 'server');  

	api.add_files('migrations_tests.js', 'server');
});