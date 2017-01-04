Games = new Mongo.Collection( 'games' );

Games.allow({
	insert: ( userId, doc ) => {
		return !!userId;
	},
	update: ( userId, doc ) => {
		return !!userId;
	},
	remove: () => false
});

Games.deny({
  insert: () => false,
  update: () => false,
  remove: () => true
});

gameSchema = new SimpleSchema({
	'name': {
		type: String,
		label: "Name"
	},
	'description': {
		type: String,
		label: "Description",
		optional: true
	},
	'creator': {
		type: String,
		label: "Creator",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteGame: function( id ) {
		Games.remove( id );
	}
});

Games.attachSchema( gameSchema );
