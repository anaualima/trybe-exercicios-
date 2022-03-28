function errorMiddleware(err, req, res) {
    return res.status(500).json({ message: 'Erro interno da aplicação' });
}
  
module.exports = errorMiddleware;