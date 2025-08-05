const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    trim: true
  },
  parentName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: String,
    required: true,
    enum: ['kindergarten', 'grade-1', 'grade-2', 'grade-3', 'grade-4', 'grade-5', 
           'grade-6', 'grade-7', 'grade-8', 'grade-9', 'grade-10', 'grade-11', 'grade-12']
  },
  previousSchool: {
    type: String,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  },
  medicalInfo: {
    allergies: String,
    medications: String,
    specialNeeds: String
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['submitted', 'under-review', 'interview-scheduled', 'accepted', 'rejected', 'waitlisted'],
    default: 'submitted'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Admission', admissionSchema);
