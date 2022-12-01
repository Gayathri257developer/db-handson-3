const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/Human_Resource2";
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    lastCompany: {
        type: String,
        required: true
    },
    lastSalary: {
        type:  String,
        required: true
    },
    overallExp: {
        type:  String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    yearGrad: {
        type: String,
        required: true
    },
    gradStream: {
        type: String,
        required: true
    },
});

async function main(){
      await mongoose.connect(url);
      const employeeModel = mongoose.model('employees',employeeSchema);
      
     const empData= [
      {
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
     },
      {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
      {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },
      {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
       {
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },
      {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
       {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },
       {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
       {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      },
       {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
       {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
      },
       {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
      },
       {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
      }
    ];

    const empModelArray = empData.map((emp) => {
      const empModelInstance = new employeeModel(emp);
      return empModelInstance;
    });

    // 1. Query the collection ""employee"" and list all the documents
   const response = await employeeModel.insertMany(empModelArray);
      console.log("response",response);

    // 2. Query the collection ""employee"" and list the employees who are having salary more than 30000
    const salary = await employeeModel.find({"salary" : {$gt : "30000"}}).exec()  
    console.log("salary",salary);

    // 3.Query the collection ""employee"" and list the employees who are having experience more than 2 years.
    const exp = await employeeModel.find({"overallExp": {$gt : "2"}}).exec()  
    console.log("experience",exp);

    // 4. Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year 
     const grad = await employeeModel.find({
      $and: [
        {
          "yearGrad": {$gt : "2015"}
        },
        {
          "overallExp" : {$gt : "1"}
        }
      ]
     }).exec()  
     console.log("graduated & experience",grad);

    //  5. Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.
     const salry = await employeeModel.updateMany(
      {
        "salary" : {
          $gt : "70000"
        }
      },
        {
          $set: {
            "salary" : "65000"
          }
        }) 
     console.log("updated salary",salry);

    //  6.Delete all the documents from ""employee"" where last company is Y"
      const lastCompany = await employeeModel.deleteMany({
        "lastCompany" : /Y/
      }).exec()
      console.log(lastCompany);
  }    
main();