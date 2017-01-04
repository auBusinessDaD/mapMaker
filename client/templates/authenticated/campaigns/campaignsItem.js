Template.CampaignsItem.onCreated( function() {
	this.editMode = new ReactiveVar( false );
});

Template.CampaignsItem.helpers({
	updateCampaignId: function() {
		return this._id;
	},
	editMode: function() {
		return Template.instance().editMode.get();
	}
});

Template.CampaignsItem.events({
  'click .editCampaign': function( event, template ) {
		//close any open edit modes

		template.editMode.set( !template.editMode.get() );
	},
	'click .viewCampaign': function() {
		FlowRouter.go( '/campaign/' + this._id );
	},
	'click .viewMaps': function() {
		FlowRouter.go( '/maps/' + this._id );
	}
});
