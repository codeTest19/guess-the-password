let store = {};

function set(value) {
  store = value;
}

function retrieve() {
  return store;
}

module.exports.inMemoryStore = {
  set,
  retrieve,
};
