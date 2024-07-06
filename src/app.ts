import express from 'express';

const app = express();

app.get('/healthcheck', (req, res) => {
  res.json({"status": "UP"});
});

export default app;