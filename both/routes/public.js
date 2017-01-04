FlowRouter.route('/', {
	name: 'home',
	action() {
		if( Meteor.userId() ) {
			FlowRouter.go( 'gameSelect' );
		} else {
			//push to analytics
			BlazeLayout.render( 'BaseLayout' );
		}
	}
});
