module.exports = (req, res, netx) => {
  const { firstName, lastName, email, password } = req.body
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).send({
      "error": true,
      "message": "O campo precisa ser válido"
    });
  }
  if (password.length < 6) {
    return res.status(400).send({
      "error": true,
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }
  netx()
}