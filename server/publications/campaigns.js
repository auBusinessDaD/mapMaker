Meteor.publish( 'campaigns', function( selectedGame ) {
  if( selectedGame ) {
    check( selectedGame, String );
    return Campaigns.find( { game: selectedGame } );
  } else {
    return Campaigns.find({});
  };
});

Meteor.publish( 'singleCampaign', function( id ) {
	check( id, String );
	return Campaigns.find( { _id: id } );
});
