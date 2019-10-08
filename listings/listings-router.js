const express = require("express");
const router = express.Router();

const Listings = require("./listings-model");

// router.get('/', (req, res) => {
//     Listings.find()
//         .then(listings => res.status(200).json(listings))
//         .catch(err => res.status(500).json({ error: "DOH!" }))
// });

router.post("/retrieve", (req, res) => {
  const email = req.body.email;

  Listings.findByEmail(email)
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(500).json({ error: "DOH!" }));
});

router.post("/save", (req, res) => {
  const listing = req.body;

  const savedListing = {
    picture_url: listing.picture_url,
    name: listing.name,
    city: listing.city,
    room_type: listing.room_type,
    guests_included: listing.guests_included,
    bedrooms: listing.bedrooms,
    beds: listing.beds,
    bathrooms: listing.bathrooms,
    user_email: listing.user_email
  };

  Listings.saveListing(savedListing)
    .then(listings => res.status(200).json(listings))
    .catch(err => res.status(500).json({ error: "DOH!" }));
});

module.exports = router;
