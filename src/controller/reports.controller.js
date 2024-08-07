const reportsModel = require("../model/reports.model.js");

const reportsController = {
  reportByCardId: async (req, res) => {
    const reportedCardId = req.params.cardid;
    const reportingUserId = req.params.userid;
    await reportsModel.reportByCardId(reportedCardId, reportingUserId);
    res.status(200).send("Report submitted, thank you.");
  },
  reportByCommentId: async (req, res) => {
    const reportedCommentId = req.params.commentid;
    const reportingUserId = req.params.userid;
    await reportsModel.reportByCommentId(reportedCommentId, reportingUserId);
    res.status(200).send("Report submitted, thank you.");
  },
  showAllReport: async (req, res) => {
    const result = await cardReportsModel.selectAllReported();
    res.status(200).json(result);
  },
};

module.exports = reportsController;
