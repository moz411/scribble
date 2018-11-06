var scribble = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'scribble',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'scribble',
          version: scribble.version,
          exports: scribble
      });
  },
  autoStart: true
};

