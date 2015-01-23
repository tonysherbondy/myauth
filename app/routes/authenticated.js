import Ember from 'ember';

// TODO(Tony) Make this a AuthenticatedRouteMixin
export default Ember.Route.extend({
  beforeModel: function(transition) {
    // or check a cookie, or other state
    if (!localStorage.authToken) {
      this.set('session.savedTransition', transition);
      this.transitionTo('login');
    } else {
      this.get('session').login();
    }
  }
});
