const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    department: {
      type: String,
    },
    basicSalary: {
      type: Number,
      required: true,
    },
    joiningDate: {
      type: Date,
    },
    hra: Number,
    da: Number,
    tax: Number,
    netSalary: Number,
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;