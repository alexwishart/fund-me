"use strict";

module.exports = function(app) {
    // Insert routes below
    app.use('/votes', require('./api/endpoint'));
};
