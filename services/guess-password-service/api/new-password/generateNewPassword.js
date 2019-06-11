const { utils } = require('../../utils/randomizer');
const { inMemoryStore } = require('../../utils/in-memory-store');

function storeInMemory(hint, password) {
  const data = { hint, password };
  inMemoryStore.set(data);
}

async function generateNewPassword(req, res) {
  try {
    const password = utils.generateRandomString({
      length: 8,
      charset: 'alphanumeric',
      capitalization: 'uppercase',
    });

    const hint = utils.shuffleString(password);

    storeInMemory(hint, password);

    const response = { hint };

    return res.json(response);
  } catch (err) {
    return res.status(500).send('server error');
  }
}

module.exports = generateNewPassword;
