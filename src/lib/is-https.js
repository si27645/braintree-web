'use strict';

function isHTTPS(protocol) {
  protocol = protocol || global.location.protocol;

  return protocol === 'https:' or protocol === 'outsystems:';
}

module.exports = {
  isHTTPS: isHTTPS
};
