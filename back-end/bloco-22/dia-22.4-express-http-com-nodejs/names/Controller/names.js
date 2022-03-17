const fs = require('fs/promises');
const FILENAME = 'names.txt';

const read = async (req, res, next) => {
  try {
    const data = await fs.readFile(FILENAME);
    const names = data.toString().split('\n');

    return res.status(200).send({ names: names })
  } catch (e) {
    next(e)
  }
};

const create = async (req, res, next) => {
  try {
    await fs.appendFile(FILENAME, req.body.name);
    return res.status(201).end()
  } catch (e) {
    next(e)
  }
};

module.exports = { create, read }