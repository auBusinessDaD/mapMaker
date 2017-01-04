Template.NewCampaign.events({
	'click .fa-close': () => {
		Session.set('newCampaign', false);
	}
});
