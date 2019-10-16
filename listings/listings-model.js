const db = require('../data/dbConfig');

module.exports = {
    find,
    findByEmail,
    saveListing
};

function find() {
    return db('listings');
};

function findByEmail(email) {
    return db('listings')
        .where({ user_email: email });
};

function saveListing(listing) {
    return db('listings')
        .insert(listing)
        .then((id) => {
            console.log("Hey this is an ID", id);
            return findByEmail(listing.user_email);
        });
};