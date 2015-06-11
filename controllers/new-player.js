Statkeeper.NewPlayerController = Ember.Controller.extend({
  needs: ['team'],
  actions: {
    save: function() {
      var newPlayer = this.store.createRecord('player', {
        playername: this.get('playername'),
        missedshots: 0,
        madeshots: 0,
        assists: 0,
        rebounds: 0,
        shotpercentage: 0
      });

      newPlayer.save();
      
      var team = this.get('controllers.team.model');
      team.get('players').pushObject(newPlayer);
      team.save();

      this.transitionToRoute('team', team.id);
    }
  }
});


// Statkeeper.NewPlayerController = Ember.ObjectController.extend ({
//   actions: {
//     save: function() {
//       var newPlayer = this.get('model');
//       newPlayer.save();
//
//       var controller = this;
//       newPlayer.get('player').then(function(player) {
//         player.save();
//         controller.transitionToRoute('player', player);
//       });
//     }
//   }
// });
