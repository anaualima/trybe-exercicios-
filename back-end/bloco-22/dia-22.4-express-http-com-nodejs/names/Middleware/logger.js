module.exports = (req, res, next) => {
  console.log(`Requisição ${req.method} no caminho ${req.path} com os params ${req.params}`);
  next()
}