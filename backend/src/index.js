const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const electorsRoute = require('./routes/electors');

app.use(cors());
app.use(express.json());
app.use('/api/electors', electorsRoute);

app.use('/api/auth', require('./routes/auth'));
app.use('/api/eleitores', require('./routes/eleitores'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
