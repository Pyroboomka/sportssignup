import knex from '../connection'

export async function getUser(id) {
  return knex('users')
    .select('username', 'name', 'surname', 'role')
    .where({ id: parseInt(id)})
};

export async function getUserByUsername(username) {
  return knex('users')
    .select('*')
    .where({ username: String(username)})
};

export async function createUser(userData) {
  return knex('users')
    .returning('id')
    .insert({
      username: String(userData.username),
      password: String(userData.password),
      role: String(userData.role),
      name: String(userData.name),
      surname: String(userData.surname),
    })
};