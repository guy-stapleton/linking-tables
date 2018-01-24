
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('albums', (table) => {
      table.increments('uid').primary()
      table.string('album_title')
      table.integer('artist_id')
        .references('artist_id')
        .inTable('artists')
      table.integer('release_year')
    }),

    knex.schema.createTable('artists', (table) => {
      table.increments('artist_id').primary()
      table.string('artist_name')
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('albums'),
    knex.schema.dropTable('artists')
  ])
};
