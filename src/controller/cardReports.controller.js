const cardReportsModel = require("../model/cardReports.model.js");

const cardReportsController = {
  reportByCardId: async (req, res) => {
    const reportedCardId = req.params.cardid;
    const reportingUserId = req.params.userid;
    await cardReportsModel.reportByCardId(reportedCardId, reportingUserId);
    res.status(200).send("Report submitted, thank you.");
  },

  showAllReport: async (req, res) => {
    const result = await cardReportsModel.selectAllReported()
    res.status(200).json(result);
  },
};

module.exports = cardReportsController;