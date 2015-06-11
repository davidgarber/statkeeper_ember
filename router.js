Statkeeper.Router.map(function() {
  this.resource('teams', {path: '/'});
  this.resource('team', {path: 'teams/:team_id'}, function() {
    this.resource('new-player');
  });
  this.resource('new-team');

  this.resource('player', {path: '/:player_id'});


});
