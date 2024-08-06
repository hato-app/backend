const knex = require("../knex");

const cardReportsModel = {
    reportByCardId: async (reportedCardId, reportingUserId) => {
        return await knex("cards_report").insert({ card_id: reportedCardId, user_id: reportingUserId }).catch((err) => {
            return "You cannot report the same post twice."
        });
    },
}

module.exports = cardReportsModel;