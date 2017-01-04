Template.Map.onCreated( function() {
  var self = this;
  self.autorun( function() {
		var id = FlowRouter.getParam( 'id' );
		self.subscribe( 'maps', id );
	});
});

Template.Map.helpers({
	map: ()=> {
		var id = FlowRouter.getParam( 'id' );
		return Maps.findOne( { _id: id } );
	}
});

Template.Map.events({

});
