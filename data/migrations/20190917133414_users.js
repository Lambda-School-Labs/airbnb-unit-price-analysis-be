exports.up = function(knex) {
  return knex.schema
  .createTable('listings', listings => {
    listings.increments();
    listings.string('picture_url', 500)
        .notNullable()
    listings.string('name', 255)
        .notNullable()
    listings.string('city', 255)
        .notNullable()
    listings.string('room_type', 255)
        .notNullable()
    listings.integer('guests_included')
        .notNullable()
    listings.integer('bedrooms')
        .notNullable()
    listings.integer('beds')
        .notNullable()
    listings.integer('bathrooms')
        .notNullable()
    listings.string('user_email', 255)
        .notNullable()
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("listings");
};
