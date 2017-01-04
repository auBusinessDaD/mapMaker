FlowRouter.route( '/gameSelect', {
	name: 'gameSelect',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Games'} )
	}
});

FlowRouter.route('/game/:id', {
	name: 'game',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Game'} )
	}
});

FlowRouter.route( '/campaigns/', {
	name: 'campaignSelect',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Campaigns'} )
	}
});

FlowRouter.route('/campaign/:id', {
	name: 'campaign',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Campaign'} )
	}
});

FlowRouter.route( '/campaigns/:game', {
	name: 'campaigns',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Campaigns'} )
	}
});

FlowRouter.route( '/maps/', {
	name: 'mapSelect',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Maps'} )
	}
});

FlowRouter.route( '/maps/:campaign', {
	name: 'maps',
	action() {
		//push to analytics
		BlazeLayout.render( 'UserLayout', {main: 'Maps'} )
	}
});

FlowRouter.route('/map/:id', {
	name: 'map',
	action() {
		//push to analytics
		BlazeLayout.render( 'MapLayout', {main: 'MapView'} )
	}
});
