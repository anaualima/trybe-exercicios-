module.exports = (err, req, res, next) => {
  return res.status(500).send({ message: 'erro na logica do servidor' })
}