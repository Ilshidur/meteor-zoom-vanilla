Package.describe({
  name: 'ilshidur:zoom-vanilla',
  version: '0.0.1',
  summary: 'spinningarrow/zoom-vanilla.js wrapped for Meteor.',
  git: 'https://github.com/Ilshidur/meteor-zoom-vanilla'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'lib/zoom-vanilla.js/dist/zoom-vanilla.min.js',
    'lib/zoom-vanilla.js/css/zoom.css'
  ], 'client');
});
