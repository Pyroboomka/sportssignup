exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('role').notNullable();
    table.string('name').notNullable();
    table.string('surname').notNullable();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
