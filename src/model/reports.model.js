const knex = require("../knex");

const reportsModel = {
  reportByCardId: async (reportedCardId, reportingUserId) => {
    await knex("cards_report")
      .insert({ card_id: reportedCardId, user_id: reportingUserId })
      .catch((err) => {
        return "You cannot report the same post twice.";
      });
    return await knex("cards")
      .where({ id: reportedCardId })
      .update({ flag_report: true });
  },
  reportByCommentId: async (reportedCommentId, reportingUserId) => {
    await knex("comments_report")
      .insert({ comment_id: reportedCommentId, user_id: reportingUserId })
      .catch((err) => {
        return "You cannot report the same comment twice.";
      });
    return await knex("comments")
      .where({ id: reportedCommentId })
      .update({ flag_report: true });
  },
  selectAllReported: async () => {
    const limitForCards = 3;
    const limitForComments = 3;

    const countReportedCards = await knex("cards_report")
      .select("card_id")
      .count("card_id")
      .groupBy("card_id");
    const shouldBeLabeledCards = [];
    for (const i of countReportedCards) {
      if (i.count >= limitForCards) {
        shouldBeLabeledCards.push(i);
      }
    }

    for (const i of shouldBeLabeledCards) {
      await knex("cards")
        .update({ flag_report: true })
        .where("id", "=", i.card_id);
    }

    const countReportedComments = await knex("comments_report")
      .select("comment_id")
      .count("comment_id")
      .groupBy("comment_id");
    const shouldBeLabeledComments = [];
    for (const i of countReportedComments) {
      if (i.count >= limitForComments) {
        shouldBeLabeledComments.push(i);
      }
    }
    for (const i of shouldBeLabeledComments) {
      await knex("comments")
        .update({ flag_report: true })
        .where("id", "=", i.comment_id);
    }

    const reported = await knex("cards")
      .leftJoin("comments", "comments.card_id", "cards.id")
      .where("cards.flag_report", "=", true)
      .orWhere("comments.flag_report", "=", true)
      .select(
        "cards.id as card_id",
        "front_text",
        "back_text",
        "cards.flag_report as flag_card",
        "comments.id as comment_id",
        "comments.text as comment_text",
        "comments.flag_report as flag_comment"
      )
      .orderBy("card_id");
    const result = [];
    const cardIds = [];
    for (const i of reported) {
      if (!cardIds.includes(i.card_id)) {
        result.push({
          card: {
            id: i.card_id,
            front_text: i.front_text,
            back_text: i.back_text,
            is_flagged: i.flag_card,
            comments: [],
          },
        });
        cardIds.push(i.card_id);
      }
    }
    for (const i of reported) {
      for (const j of result) {
        if (j.card.id === i.card_id) {
          j.card.comments.push({
            id: i.comment_id,
            text: i.comment_text,
          });
        }
      }
    }
    return result;
  },
};

module.exports = reportsModel;
