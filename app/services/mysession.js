import Ember from 'ember';

export default Ember.Object.extend({
  isLoggedIn: Ember.computed.notEmpty('token'),
  savedTransition: null,
  token: function() {
    return localStorage.authToken;
  }.property(),
  login: function(token) {
    localStorage.authToken = token;
    this.setProperties({ savedTransition: null, token: token });
  },
  logout: function() {
    delete localStorage.authToken;
    this.notifyPropertyChange('token');
  }
});
