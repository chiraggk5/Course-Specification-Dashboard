// models/CourseSpec.js
const mongoose = require('mongoose');

const courseSpecSchema = new mongoose.Schema({
  // --- Access Control & Workflow ---
  facultyId: { type: String, required: true }, // Mock ID for now
  status: { 
    type: String, 
    enum: ['Draft', 'Pending HOD Approval', 'Approved'], 
    default: 'Draft' 
  },

  // --- Header Data ---
  courseTitle: { type: String, required: true },
  courseCode: { type: String, required: true },
  courseType: { type: String }, // e.g., Core, Elective
  department: { type: String },
  facultyName: { type: String },

  // --- Section 1: Course Summary ---
  courseSummary: { type: String },

  // --- Section 2: Course Size and Credits ---
  credits: {
    lecture: { type: Number, default: 0 },
    tutorial: { type: Number, default: 0 },
    practical: { type: Number, default: 0 },
    total: { type: Number, default: 0 }
  },
  totalHours: { type: Number },
  totalMarks: { type: Number },
  passCriterion: { type: String },

  // --- Section 3: Course Outcomes (COs) ---
  courseOutcomes: [{
    coId: { type: String }, // e.g., "CO-1"
    description: { type: String }
  }],

  // --- Section 4: Course Contents ---
  courseContents: [{
    unitNumber: { type: Number },
    title: { type: String },
    description: { type: String },
    hours: { type: Number }
  }],

  // --- Section 5: CO-PO Mapping (Matrix) ---
  // Using a Map to easily store dynamic PO/PSO keys (e.g., "PO1": 3, "PSO1": 2)
  coPoMapping: [{
    coId: { type: String },
    mappings: { type: Map, of: Number } 
  }],

  // --- Section 6, 7 & 8: Methods, Assessment & Skills (Simplified for brevity) ---
  teachingMethods: [{ method: String, hours: Number }],
  assessment: [{ component: String, weightage: Number, mappedCOs: [String] }],
  
  // --- Section 9: Course Resources ---
  resources: {
    essential: [{ type: String }],
    recommended: [{ type: String }],
    websites: [{ type: String }]
  }
}, { timestamps: true });

module.exports = mongoose.model('CourseSpec', courseSpecSchema);