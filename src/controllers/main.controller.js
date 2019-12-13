const Student = require('../models/student.model');
const Company = require('../models/company.model');
const Branch = require('../models/branch.model');

module.exports = {
    addStudent: async (req, res) => {
        try {
            const { body } = req;
            const student = new Student(body);
            await student.save();
            return res.json({ success: true, messge: 'Student successfully added!', data: student });
        } catch (error) {
            return res.status(400).json({ success: false, messge: error.messge });
        }
    },
    getStudents: async (req, res) => {
        try {
            const students = await Student.find().populate([{ path: 'branch', select: 'name' }, { path: 'company', select: 'name' }]);
            if (!students.length)
                return new Error('Students data not found!')
            else
                return res.json({ success: true, data: students });
        } catch (error) {
            return res.status(404).json({ success: false, messge: error.messge });
        }
    },
    addCompany: async (req, res) => {
        try {
            const { body } = req;
            const company = new Company(body);
            await company.save();
            return res.json({ success: true, messge: 'Company successfully added!', data: company });
        } catch (error) {
            return res.status(404).json({ success: false, messge: error.messge });
        }
    },
    getCompanies: async (req, res) => {
        try {
            const companies = await Company.find();
            if (!companies.length)
                return new Error('Companies data not found!')
            else
                return res.json({ success: true, data: companies });
        } catch (error) {
            return res.status(404).json({ success: false, messge: error.messge });
        }
    },
    addBranch: async (req, res) => {
        try {
            const { body } = req;
            const branch = new Branch(body);
            await branch.save();
            return res.json({ success: true, messge: 'Branch successfully added!', data: branch });
        } catch (error) {
            return res.status(400).json({ success: false, messge: error.messge });
        }
    },
    getBranches: async (req, res) => {
        try {
            const branches = await Branch.find();
            if (!branches.length)
                return new Error('branches data not found!')
            else
                return res.json({ success: true, data: branches });
        } catch (error) {
            return res.status(404).json({ success: false, messge: error.messge });
        }
    }
}
