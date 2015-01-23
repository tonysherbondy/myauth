import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  headers: function() {
    return {
      "X-Auth-Token": this.get("session.token"),
    };
  }.property("session.token")
});
