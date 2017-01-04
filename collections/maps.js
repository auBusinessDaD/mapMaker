Maps = new Mongo.Collection( 'maps' );

Maps.allow({
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

displaySchema = new SimpleSchema({
	'title': {
		type: String
	},
	'image': {
		type: String
	},
  'height': {
    type: String
  },
  'width': {
    type: String
  },
  'displayLevel': {
    type: String
  },
  'displayX': {
    type: String
  },
  'displayY': {
    type: String
  },
  'displayZ': {
    type: String
  }
});

mapSchema = new SimpleSchema({
	'name': {
		type: String,
		label: "Name"
	},
	'description': {
		type: String,
		label: "Description",
		optional: true
	},
	'owner': {
		type: String,
		label: "Owner",
		autoValue: function() {
			return this.userId;
		}
	},
	'editors': {
		type: String,
		label: "Editors",
		optional: true,
		autoValue: function() {
			return this.userId;
		}
	},
	'viewers': {
		type: String,
		label: "Viewers",
		optional: true,
		autoValue: function() {
			return this.userId;
		}
	},
  'mapTiles': {
    type: [ displaySchema ]
  },
  'characters': {
    type: [ displaySchema ]
  },
	'author': {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId;
		},
		autoform: {
			type: "hidden"
		}
	}
});

Meteor.methods({
	deleteMap: function( id ) {
		Maps.remove( id );
	}
});

Maps.attachSchema( mapSchema );
