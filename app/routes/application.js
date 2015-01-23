import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logout: function() {
      this.get('session').logout();
      delete localStorage.authToken;
      this.transitionTo('login');
    }
  }
});
