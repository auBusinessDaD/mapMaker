Template.Maps.onCreated( function() {
  var self = this;
  self.autorun( function() {
		var campaignID = FlowRouter.getParam( 'campaign' );
		self.subscribe( 'maps', campaignID );//CHANGE TO FIND MAPS THAT ARE FOR THIS CAMPAIGN
	});
});

Template.Maps.helpers({

});

Template.Maps.events({
	'click .newMap': () => {
		Session.set('newMap', true);
	}
});
