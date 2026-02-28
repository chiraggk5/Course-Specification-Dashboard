// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CourseSpec = require('./models/CourseSpec');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to local MongoDB (Make sure MongoDB is installed and running locally)
mongoose.connect('mongodb://localhost:27017/course-dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// --- MOCK AUTHENTICATION MIDDLEWARE ---
// In the future, this will be replaced by Microsoft JWT validation
const mockAuth = (req, res, next) => {
  req.user = {
    id: req.headers['user-id'] || 'faculty123',
    role: req.headers['user-role'] || 'faculty' // 'faculty' or 'hod'
  };
  next();
};

app.use(mockAuth);

// --- API ROUTES ---

// 1. Create a new Course Specification (Faculty)
app.post('/api/courses', async (req, res) => {
  try {
    const newSpec = new CourseSpec({
      ...req.body,
      facultyId: req.user.id
    });
    const savedSpec = await newSpec.save();
    res.status(201).json(savedSpec);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Get Courses for Dashboard
app.get('/api/courses', async (req, res) => {
  try {
    let query = {};
    // Role-based access control mock
    if (req.user.role === 'faculty') {
      query.facultyId = req.user.id; // Faculty only sees their own courses
    } else if (req.user.role === 'hod') {
      // HOD sees everything, perhaps filtering only "Pending HOD Approval"
      query.status = { $in: ['Pending HOD Approval', 'Approved'] }; 
    }
    
    const courses = await CourseSpec.find(query).select('courseCode courseTitle status updatedAt');
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Get Single Course Detail (For viewing/editing)
app.get('/api/courses/:id', async (req, res) => {
  try {
    const course = await CourseSpec.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. Update Status (HOD Approval)
app.patch('/api/courses/:id/status', async (req, res) => {
  if (req.user.role !== 'hod') {
    return res.status(403).json({ error: 'Only HOD can change status' });
  }
  try {
    const updatedCourse = await CourseSpec.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));