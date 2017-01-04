Template.Campaign.onCreated( function() {
	var self = this;
	self.autorun( function() {
		var id = FlowRouter.getParam( 'id' );
		self.subscribe( 'singleCampaign', id );
	});
});

Template.Campaign.helpers({
	campaign: ()=> {
		var id = FlowRouter.getParam( 'id' );
		return Campaigns.findOne( { _id: id } );
	}
});
