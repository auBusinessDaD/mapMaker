if ( Meteor.isClient ) {
	Accounts.onLogin( function() {
		FlowRouter.go( 'gameSelect' );
	});

	Accounts.onLogout( function() {
		FlowRouter.go( 'home' );
	});
};

FlowRouter.triggers.enter( [
  function( context, redirect ) {
  	if( !Meteor.userId() ) {
  		FlowRouter.go( 'home' );
  	};
  }
]);
