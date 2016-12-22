App.info({
  id: 'com.meteor.cordova-test',
  name: 'cordova-test',
  version: "0.0.1"
});

App.accessRule('http://localhost', { type: 'navigation' } );
App.accessRule('http://localhost:3000', { type: 'navigation' } );
