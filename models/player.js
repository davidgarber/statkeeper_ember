Statkeeper.Player = DS.Model.extend({
  playername: DS.attr(),
  missedshots: DS.attr(),
  madeshots: DS.attr(),
  shotpercentage: DS.attr(),
  assists: DS.attr(),
  rebounds: DS.attr(),

  team: DS.belongsTo('team', {async: true})
});
