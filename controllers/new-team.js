Statkeeper.NewTeamController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newTeam = this.store.createRecord('team', {
        name: this.get('name')
      });

      newTeam.save();
      this.transitionToRoute('teams');
    }
  }
});
