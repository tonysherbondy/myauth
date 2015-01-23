import Ember from 'ember';

// Mix this in to routes that the user needs to be authed to visit
export default Ember.Mixin.create({
  beforeModel: function(transition) {
    // or check a cookie, or other state
    if (!this.get('session.isLoggedIn')) {
      this.set('session.savedTransition', transition);
      this.transitionTo('login');
    }
  }
});
