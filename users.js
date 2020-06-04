const shortid = require('shortid')

let users = [
	{
		id: shortid.generate(),
		username: 'Jane Doe',
		bio: 'Some string here',
	},
	{
		id: shortid.generate(),
		username: 'John Doe',
		bio: 'Some string here',
	},
	{
		id: shortid.generate(),
		username: 'Jimmy Doe',
		bio: 'Some string here',
	},
	{
		id: shortid.generate(),
		username: 'Jeff Doe',
		bio: 'Some string here',
	},
	{
		id: shortid.generate(),
		username: 'Datass Doe',
		bio: 'Some string here',
	},
	{
		id: shortid.generate(),
		username: 'Freddy Doe',
		bio: 'Some string here',
	},
	{
		id: shortid.generate(),
		username: 'Terry Doe',
		bio: 'Some string here',
	},
]

// functions for handling endpoint interactions
function getUsers() {
	return users
}

function getUserById(id) {
	return users.find(u => u.id === id)
}

function createUser(data) {
	const payload = {
		id: String(users.length + 1),
		...data,
	}

	users.push(payload)
	return payload
}

function updateUser(id, data) {
	const index = users.findIndex(u => u.id === id)
	users[index] = {
		...users[index],
		...data,
	}
	return users[index]
}

function deleteUser(id) {
	users = users.filter(u => u.id != id)
}

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
}
