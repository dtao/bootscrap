var fs   = require('fs'),
    path = require('path');

function themeExists(theme) {
  return (fs.existsSync || path.existsSync)(Bootstrapper.path(theme));
}

function readFileForTheme(theme) {
  return fs.readFileSync(Bootstrapper.path(theme), 'utf-8');
}

var Bootstrapper = {
  path: function(theme) {
    return path.join(__dirname, 'resources', 'css', theme + '.css');
  },

  css: function(theme) {
    theme = theme || 'default';

    if (!themeExists(theme)) {
      throw 'The theme "' + theme + '" does not exist.';
    }

    return readFileForTheme(theme);
  }
};

module.exports = Bootstrapper;
