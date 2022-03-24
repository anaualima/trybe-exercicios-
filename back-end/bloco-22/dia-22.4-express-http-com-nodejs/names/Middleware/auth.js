module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ message: 'Usuário não autorizado para operação.' })
  }
  if (req.headers.authorization !== 'senha') {
    return res.status(401).send({ message: 'Usuário digitou senha incorreta.' })
  }
  next()

}