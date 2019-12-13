const faker = require('faker');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Student = require('./src/models/student.model');
const Company = require('./src/models/company.model');
const Branch = require('./src/models/branch.model');

dotenv.config();

const companies = [];
const students = [];
const branchIds = [];
const companyIds = [];

const branches = [
    { "name": "Computer Science & Engineering", "code": "CSE" },
    { "name": "Electronics & Communication", "code": "ECE" },
    { "name": "Civil Engineering", "code": "CIVIL" },
    { "name": "Mechanical Engineering", "code": "MEC" }
].map((branch) => {
    const _id = mongoose.Types.ObjectId();
    branchIds.push(_id);
    return { ...branch, _id };
});

for (let index = 0; index < 20; index++) {
    const _id = mongoose.Types.ObjectId();
    const company = { _id, name: faker.company.companyName(), email: faker.internet.email(), city: faker.address.city() };
    companies.push(company);
    companyIds.push(_id);
}

for (let index = 0; index < 100; index++) {
    const student = { firstName: faker.name.findName(), lastName: faker.name.lastName(), gender: faker.random.arrayElement(['Male', 'Female']), email: faker.internet.email(), branch: faker.random.arrayElement(branchIds), company: faker.random.arrayElement(companyIds) };
    students.push(student);
}

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });
        await Branch.insertMany(branches);
        await Company.insertMany(companies);
        await Student.insertMany(students);
    } catch (error) {
        throw error;
    }
})().then(() => console.log('Done')).catch(err => console.error(err));