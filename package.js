Package.describe({
  name: 'apollo',
  version: '0.2.1',
  summary: ' 🚀 Add Apollo to your Meteor app',
  git: 'https://github.com/jasonnathan/meteor-integration'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.0.1');
  api.use(['ecmascript',
           'underscore',
           'accounts-base']);

  api.mainModule('main-client.js', 'client');
  api.mainModule('main-server.js', 'server');
});

Package.onTest(function(api) {
  api.use(['ecmascript',
           'practicalmeteor:mocha',
           'practicalmeteor:chai',
           'apollo']);

  api.mainModule('tests/client.js', 'client');
  api.mainModule('tests/server.js', 'server');
});
