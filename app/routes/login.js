import Ember from 'ember';

export default Ember.Route.extend({
  defaultRoute: 'posts',

  actions: {
    // TODO Make this take username and password so we don't pull
    // from controller
    login: function() {
      var loginController = this.controllerFor('login');
      var username = loginController.get('username');
      var password = loginController.get('password');

      // TODO Move to auth server
      if (username === 'tony' && password === 'p') {
        localStorage.authToken = "auth-token-here";
        var transition = this.get("session.savedTransition");
        this.get("session").login();

        // If the user was going somewhere send them along otherwise
        // go to some default
        if (transition) {
          transition.retry();
        } else {
          this.transitionTo(this.get('defaultRoute'));
        }
      }
    }
  }
});
