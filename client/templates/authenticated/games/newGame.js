Template.NewGame.events({
	'click .fa-close': () => {
		Session.set('newGame', false);
	}
});
