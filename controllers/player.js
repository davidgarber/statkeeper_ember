Statkeeper.PlayerController = Ember.ObjectController.extend({
actions: {
  test: function(){
    console.log(this.get('playername'))
  }
}
});
