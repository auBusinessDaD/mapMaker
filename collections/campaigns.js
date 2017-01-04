Campaigns = new Mongo.Collection( 'campaigns' );

Campaigns.allow({
	insert: ( userId, doc ) => {
		return !!userId;
	},
	update: ( userId, doc ) => {
		return !!userId;
	},
	remove: () => false
});

Campaigns.deny({
  insert: () => false,
  update: () => false,
  remove: () => true
});

campaignsSchema = new SimpleSchema({
	'name': {
		type: String,
		label: "Name"
	},
	'description': {
		type: String,
		label: "Description",
		optional: true
	},
	'game': {
		type: String,
		label: "Game",
		autoform: {
			type: 'selectize',
			options: function() {
				//return an array of the "Games" and their id's
				return Games.get();
			}
		},
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
	deleteCampaign: function( id ) {
		Campaigns.remove( id );
	}
});

Campaigns.attachSchema( campaignsSchema );
