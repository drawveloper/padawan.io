// Prevent Mocha from compiling class
function noop() {
  return null
}
require.extensions['.scss'] = noop
