import Ember from 'ember';

export default Ember.Route.extend({
  defaultRoute: 'posts',

  actions: {
    login: function() {
      var loginController = this.controllerFor('login');
      var username = loginController.get('username');
      var password = loginController.get('password');

      // TODO This should be a post and not a get and the
      // server should check username/pass not here
      var that = this;
      Ember.$.get('api/auth').then(function(data) {
        if (username === 'tony' && password === 'p' && data.authToken) {
          var transition = that.get("session.savedTransition");
          that.get("session").login(data.authToken);

          // If the user was going somewhere send them along otherwise
          // go to some default
          if (transition) {
            transition.retry();
          } else {
            that.transitionTo(that.get('defaultRoute'));
          }
        }
      });
    }
  }
});
