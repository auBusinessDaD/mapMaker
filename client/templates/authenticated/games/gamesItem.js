Template.GamesItem.onCreated( function() {
	this.editMode = new ReactiveVar( false );
});

Template.GamesItem.helpers({
	updateGameId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.GamesItem.events({
  'click .editGame': function( event, template ) {
		//close any open edit modes

		template.editMode.set( !template.editMode.get() );
	},
	'click .viewGame': function() {
		FlowRouter.go( '/game/' + this._id );
	},
	'click .viewCampaigns': function() {
		FlowRouter.go( '/campaigns/' + this._id );
	}
});
