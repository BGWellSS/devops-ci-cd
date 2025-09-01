const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true, message: 'Hello from UNAMA DevOps - Atividade 1 (Heroku)' });
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const port = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
