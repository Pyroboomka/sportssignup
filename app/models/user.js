import bcrypt from 'bcrypt';
import chalk from 'chalk'
import * as usersQueries from '../../db/queries/users'
const SALT_ROUNDS = 10;

const userCRUD = {
  get: async (id) => {
    let result = await usersQueries.getUser(id)
    return result
  },
  create: async (requestBody) => {
    const { username, password, name, surname, role = 'user' } = requestBody
    // Сheck if username is not taken
    const searchByUsernameResults = await usersQueries.getUserByUsername(username);
    if (searchByUsernameResults.length === 0) {
      const salt = await bcrypt.genSalt(SALT_ROUNDS);
      const hash = await bcrypt.hash(password, salt);
      const newUser = { username, name, surname, role, password: hash };
      const resultId = await usersQueries.createUser(newUser);
      return userCRUD.get(resultId);
    }
    throw {
      statusCode: 409,
      message: 'Username already taken',
    };
  }

};

export default userCRUD;