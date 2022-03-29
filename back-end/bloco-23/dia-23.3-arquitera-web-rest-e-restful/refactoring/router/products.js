const express = require('express');
const router = express.Router();

const Cep = require('../controller/cep');

router.get('/:cep', Cep.findAddress);
router.post('/', Cep.createAddress);

module.exports = router;