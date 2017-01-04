Template.Campaigns.onCreated( function() {
	var self = this;
	self.autorun( function() {
		var gameId = FlowRouter.getParam( 'game' );
		self.subscribe( 'campaigns', gameId );
	});
});

Template.Campaigns.helpers({
	campaigns: ()=> {
		return Campaigns.find({});
	}
});

Template.Campaigns.events({
	'click #newCampaign': () => {
		Session.set('newCampaign', true);
	}
});
