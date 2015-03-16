Package.describe({
  name: 'miguelalarcos:afwrap-text-editor',
  version: '0.1.1',
  summary: 'wrap over miguelalarcos:text-editor so it works ok with autoform',
  git: 'https://github.com/miguelalarcos/afwrap-text-editor.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('coffeescript', 'client');
  api.use('jquery', 'client');
  api.use('templating', 'client');
  api.use('aldeed:autoform@5.0.2', 'client');
  api.use('miguelalarcos:text-editor@0.1.3', 'client');
  api.addFiles('wrap.coffee', 'client');
});
