Statkeeper.Player = DS.Model.extend({
  playername: DS.attr(),
  team: DS.belongsTo('team', {async: true})
});
