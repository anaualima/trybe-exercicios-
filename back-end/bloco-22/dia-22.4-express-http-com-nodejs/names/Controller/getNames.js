module.exports = async (req, res, next) => {
  try {
    const data = await fs.readFile(FILENAME);
    const names = data.toString().split('\n');

    return res.status(200).send({ names: names })
  } catch (e) {
    next(e)
  }
};