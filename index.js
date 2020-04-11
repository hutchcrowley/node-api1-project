const express = require('express');
const db = require('./database.js');

// call express function and assign it to server variable
const server = express();

// tell the client we'll be sending off data in json format
server.use(express.json());

// first endpoint for handling a 'home' route

server.get('/', (req, res) => {
	res.json({
		message: 'welcome to our API'
	});
});

server.get('/users', (req, res) => {
	const users = db.getUsers();
	res.json(users);
});

server.get('/users/:id', (req, res) => {
	const userId = req.params.id;
	const user = db.getUserById(userId);

	if (user) {
		res.json(user);
	} else {
		res.status(404).json({
			message: 'User not found!'
		});
	}
});

server.post('/users', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({
      message: 'User not created'
    });
  }
  const newUser = db.createUser({
    name: req.body.name
  });
  res.status(201).json(newUser);
});

server.put('/users/:id', (req, res) => {
  const user = db.getUserById(req.params.id);
  if (user) {
    const updatedUser = db.updateUser(user.id, {
      name: req.body.name || user.name
    });
    res.json(updatedUser);
  }  else {
    res.status(400).json({
      message: 'User not found - cannot update'
    });
  }
});

server.delete('/users/:id', (req, res) => {
  const user = db.getUserById(req.params.id);

  if (user) {
    db.deleteUser(user.id);
  //  respond with  a 204, which is s a successful empty response
  res.status(204).end();
  } else {
    res.status(404).json({
      message: 'User not found = cannot delete'
    })
  }
})

server.listen(3000, () => {
  console.log('server started at port 3000');
})