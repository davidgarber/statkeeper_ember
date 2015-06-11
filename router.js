Statkeeper.Router.map(function() {
  this.resource('teams');
  this.resource('new-team');
  this.resource('team', {path: 'teams/:team_id'});
});
