const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).send({ error: 'Missing or invalid user data' });
  }
  // ... further code to handle the user object
  res.status(201).send(user);
});
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});