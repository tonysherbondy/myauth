export function initialize(container, application) {
  application.inject('route', 'session', 'service:mysession');
  application.inject('controller', 'session', 'service:mysession');
  application.inject('adapter', 'session', 'service:mysession');
}

export default {
  name: 'mysession-service',
  initialize: initialize
};
