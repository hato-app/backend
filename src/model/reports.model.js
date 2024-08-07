const knex = require("../knex");

const reportsModel = {
    reportByCardId: async (reportedCardId, reportingUserId) => {

        await knex("cards_report").insert({ card_id: reportedCardId, user_id: reportingUserId }).catch((err) => {
            return "You cannot report the same post twice."
        });
        return await knex("cards").where({ id: reportedCardId }).update({ flag_report: true });
    },
    reportByCommentId: async (reportedCommentId, reportingUserId) => {

        await knex("comments_report").insert({ comment_id: reportedCommentId, user_id: reportingUserId }).catch((err) => {
            return "You cannot report the same comment twice."
        });
        return await knex("comments").where({ id: reportedCommentId }).update({ flag_report: true });
    },
}

module.exports = reportsModel;