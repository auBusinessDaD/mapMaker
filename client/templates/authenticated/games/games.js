Template.Games.onCreated( function() {
	var self = this;
	self.autorun( function() {
		self.subscribe( 'games' );
	});
});

Template.Games.helpers({
	games: ()=> {
		return Games.find({});
	}
});

Template.Games.events({
	'click #newGame': () => {
		Session.set('newGame', true);
	}
});
