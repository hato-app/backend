const commentReportsModel = require("../model/commentReports.model.js")

const commentReportsController = {
    reportByCommentId: async (req, res) => {
        const reportedCommentId = req.params.commentid;
        const reportingUserId = req.params.userid;
        await commentReportsModel.reportByCommentId(reportedCommentId, reportingUserId);
        res.status(200).send("Report submitted, thank you.");
    }
}

module.exports = reportsController;