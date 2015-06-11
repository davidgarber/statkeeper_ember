Statkeeper.PlayerController = Ember.ObjectController.extend({
  actions: {

    shotpercentage: function() {
      var percentage = madeshots/(madeshots + missedshots);
      this.set("shotpercentage", percentage);
      this.get("model").save();
    },
    
    madeshots: function() {
      this.incrementProperty('madeshots');
      this.set("shotpercentage", this.shotpercentage());
      this.get("model").save();

    },
    missedshots: function() {
      this.incrementProperty('missedshots');
      this.set("shotpercentage", this.shotpercentage());
      this.get("model").save();

    },
    assists: function() {
      this.incrementProperty('assists');
      this.get("model").save();

    },
    rebounds: function() {
      this.incrementProperty('rebounds');
      this.get("model").save();

    }


  }
});
