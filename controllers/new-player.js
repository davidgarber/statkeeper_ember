Statkeeper.NewPlayerController = Ember.Controller.extend({
  needs: ['team'],
  actions: {
    save: function() {
      var newPlayer = this.store.createRecord('player', {
        playername: this.get('playername')
      });

      newPlayer.save();
      var team = this.get('controllers.team.model');
      team.get('players').pushObject(newPlayer);
      team.save();


      this.transitionToRoute('team', team.id);
    }
  }
})
