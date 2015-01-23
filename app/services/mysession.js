import Ember from 'ember';

export default Ember.Object.extend({
  isLoggedIn: false,
  savedTransition: null,
  login: function() {
    this.setProperties({ savedTransition: null, isLoggedIn: true });
  },
  logout: function() {
    this.set('isLoggedIn', false);
  }
});
