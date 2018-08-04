var _ = require('lodash');
var fs = require('fs');
var yaml = require('js-yaml');

module.exports = function (path) {
  if (!path) return {};

  var file = yaml.safeLoad(fs.readFileSync(path, 'utf8'));

  function apply(config, val, key) {
    if (_.isPlainObject(val)) {
      _.forOwn(val, function (subVal, subKey) {
        apply(config, subVal, key + '.' + subKey);
      });
    } else {
      _.set(config, key, val);
    }
  }

  // transform legeacy options into new namespaced versions
  return _.transform(file, function (config, val, key) {
    apply(config, val, key);
  }, {});
};

