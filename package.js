Package.describe({
  summary: 'Control your hue lights with meteorjs.',
  version: '0.0.1',
  name: 'fnordian:hue',
  git: 'https://github.com/fnordian/meteor-hue'
})

Package.on_use(function(api) {
  api.use("http", "server");
  api.add_files("hue.js", "server");
  api.export("Hue", "server");
});
