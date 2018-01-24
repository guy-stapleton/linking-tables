
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(function () {
      // Inserts seed entries
      return knex('artists').insert([
        {artist_id: 1, artist_name: 'Everclear'},
        {artist_id: 2, artist_name: 'The Offspring'},
      ]);
    });
};
