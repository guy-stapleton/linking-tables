
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('albums').del()
    .then(function () {
      // Inserts seed entries
      return knex('albums').insert([
        {uid: 1, album_title: 'Sparkle and fade', artist_id: 1, release_year: 1996},
        {uid: 2, album_title: 'So mcuh for the afterglow', artist_id: 1, release_year: 1998},
        {uid: 3, album_title: 'Smash', artist_id: 2, release_year: 1994}
      ]);
    });
};
