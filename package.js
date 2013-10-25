Package.describe({
  summary: "HTML2JSON and JSON2HTML parser via fastFrag for Meteor"
});

Package.on_use(function(api) {
  api.add_files('fastFrag.js', ['client','server']);
});

