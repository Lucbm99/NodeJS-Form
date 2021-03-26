const db = require('./bd');

const Team = db.sequelize.define('teams', {
    time: {
        type: db.Sequelize.STRING
    },
    cidade: {
        type: db.Sequelize.STRING
    },
    estado: {
        type: db.Sequelize.CHAR(2)
    }
})


module.exports = Team;