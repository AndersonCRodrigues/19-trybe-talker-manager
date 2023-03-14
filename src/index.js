const express = require('express');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

const taklerRouter = require('./routes/talkerRouter');
const userRouter = require('./routes/usetRouter');

app.use('/talker', taklerRouter);
app.use('/login', userRouter);

app.listen(PORT, () => {
  console.log('Online');
});
