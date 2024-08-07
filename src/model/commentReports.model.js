const knex = require("../knex");

const commentReportsModel = {
    reportByCommentId: async (reportedCommentId, reportingUserId) => {

        await knex("comments_report").insert({ comment_id: reportedCommentId, user_id: reportingUserId }).catch((err) => {
            return "You cannot report the same comment twice."
        });
        return await knex("comments").where({ id: reportedCommentId }).update({ flag_report: true });
    },
}

module.exports = commentReportsModel;