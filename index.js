const app = require('express')();

function listUsers(req, res) {
   res.json([{id: 1, name: 'kailash', id: 2, name: 'Rajesh'}]);
}

app.get('/users', listUsers);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port ' + (process.env.PORT || 3000));
})


module.exports = server;