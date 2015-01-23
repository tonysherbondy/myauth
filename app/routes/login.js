import Ember from 'ember';

export default Ember.Route.extend({
  defaultRoute: 'posts',

  actions: {
    login: function() {

      this.store.findAll('post').then(function(posts) {
        console.log('Login function is naughty and able to access data it should not', posts);
      }, function(reason) {
        console.log('Login function was protected from accessing posts because:', reason.statusText);
      });

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
