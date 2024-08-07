const knex = require("../knex");

const cardReportsModel = {
  reportByCardId: async (reportedCardId, reportingUserId) => {
    return await knex("cards_report")
      .insert({ card_id: reportedCardId, user_id: reportingUserId })
      .catch((err) => {
        return "You cannot report the same post twice.";
      });
  },

  selectAllReported: async () => {
    const limitForCards = 3;
    const limitForComments = 3;

    const countReportedCards = await knex("cards_report")
      .select("card_id")
      .count("card_id")
      .groupBy("card_id");
    //result example : [ { card_id: 2, count: '1' }, { card_id: 1, count: '6' } ]
    console.log(countReportedCards);
    const shouldBeLabeledCards = [];
    for (const i of countReportedCards) {
      if (i.count >= limitForCards) {
        shouldBeLabeledCards.push(i);
      }
    }

    for (const i of shouldBeLabeledCards) {
      console.log(i);
      await knex("cards")
        .update({ flag_report: true })
        .where("id", "=", i.card_id);
    }

    const countReportedComments = await knex("comments_report")
      .select("comment_id")
      .count("comment_id")
      .groupBy("comment_id");
    //result example : [ { comment_id: 2, count: '1' }, { comment_id: 1, count: '6' } ]
    console.log(countReportedComments);
    const shouldBeLabeledComments = [];
    for (const i of countReportedComments) {
      if (i.count >= limitForComments) {
        shouldBeLabeledComments.push(i);
      }
    }
    for (const i of shouldBeLabeledComments) {
      console.log(i);
      await knex("comments")
        .update({ flag_report: true })
        .where("id", "=", i.comment_id);
    }

    const reported = await knex("comments")
      .leftJoin("cards", "comments.card_id", "cards.id")
      .where("cards.flag_report", "=", true)
      .orWhere("comments.flag_report", "=", true)
      .select(
        "card_id",
        "front_text",
        "back_text",
        "cards.flag_report as flag_card",
        "comments.id as comment_id",
        "comments.text as comment_text",
        "comments.flag_report as flag_comment"
      )
      .orderBy("card_id");
    console.log(reported);
    //result example
    // [
    //   {
    //     card_id: 1,
    //     front_text: 'What do you call a pony with a cough?',
    //     back_text: 'A little horse',
    //     flag_card: true,
    //     comment_id: 2,
    //     comment_text: 'no, this is great!',
    //     flag_comment: false
    //   },
    //   {
    //     card_id: 1,
    //     front_text: 'What do you call a pony with a cough?',
    //     back_text: 'A little horse',
    //     flag_card: true,
    //     comment_id: 4,
    //     comment_text: 'nah, this is so bad...',
    //     flag_comment: false
    //   },
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

module.exports = cardReportsModel;
