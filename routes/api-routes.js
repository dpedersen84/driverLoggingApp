const db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {

    // All trips
    app.get("/api/:user/trips", (req, res) => {
        db.Trips.findAll({
                where: {
                    userid: req.params.user
                }
            })
            .then(dbTrips => {
                res.json(dbTrips);
            })
    })

    // Single trip
    app.get("/api/:user/trips/:id", (req, res) => {
        db.Trips.findOne({
            where: {
                id: req.params.id
            },

        }).then(dbTrips => {
            res.json(dbTrips);
        });
    });

    // Delete a Trip
    app.delete("/api/:user/trips/:id", (req, res) => {
        db.Trips.destroy({
            where: {
                userid: req.params.user,
                id: req.params.id
            }
        }).then(dbTrips => {

            res.json(dbTrips)
        });

    })

    // Update a Trip
    app.put("/api/:user/trips/:id", (req, res) => {
        db.Trips.update(
            req.body, {
                where: {
                    userid: req.params.user,
                    id: req.params.id
                }
            }).then(dbTrips => {
            res.json(dbTrips);
        })
    })

    // Add a new trip
    app.post("/api/trips", (req, res) => {
        db.Trips.create(req.body).then(dbTrips =>{
            res.json(dbTrips);
        })

    })

}