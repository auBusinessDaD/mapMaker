Meteor.publish( 'games', function() {
	return Games.find();
});

Meteor.publish( 'singleGame', function( id ) {
	check( id, String );
	return Games.find( { _id: id } );
});
