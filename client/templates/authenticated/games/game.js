Template.Game.onCreated( function() {
	var self = this;
	self.autorun( function() {
		var id = FlowRouter.getParam( 'id' );
		self.subscribe( 'singleGame', id );
	});
});

Template.Game.helpers({
	game: ()=> {
		var id = FlowRouter.getParam( 'id' );
		return Games.findOne( { _id: id } );
	}
});
