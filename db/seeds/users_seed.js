exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          username: 'admin',
          password: '$2b$10$vIbPsV4zI1YoLS.gxbHZae4sq26xJOyzjIbvJ9f/IrYqmgDnS9Pce',
          name: 'admin',
          surname: 'admin',
          role: 'admin',
        },
      ]);
    });
};
