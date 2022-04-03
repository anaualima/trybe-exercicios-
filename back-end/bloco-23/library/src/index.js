const express = require('express');
const { getAll, getById, create, update, deleteById } = require('./models/customers');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/customers', async (req, res) => {

  try {
    const customers = await getAll();
    return res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }

}); 

app.get('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await getById(id);
    return res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}); 

app.post('/customers', async (req, res) => {
  try {
    const { name, email, cpf, password } = req.body;

    const customer = await create({name, email, cpf, password});

    return res.status(201).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.put('/customers/:id', async (req, res) => {
  try {
    const { name, email, cpf, password } = req.body;
    const { id } = req.params;

    const customer = await update({id, name, cpf, email, password});

    return res.status(200).json(customer);

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.delete('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id);
    return res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
})

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));