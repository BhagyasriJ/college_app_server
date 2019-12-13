const controller = require('../controllers/main.controller');

module.exports = function (app) {
    app.route('/api/student').post(controller.addStudent).get(controller.getStudents);
    app.route('/api/company').post(controller.addCompany).get(controller.getCompanies);
    app.route('/api/branch').post(controller.addBranch).get(controller.getBranches);
}