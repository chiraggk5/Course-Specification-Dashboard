// src/components/Dashboard.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard({ user }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses from our Node.js backend
    axios.get('http://localhost:5000/api/courses', {
      headers: { 'user-id': user.id, 'user-role': user.role }
    })
    .then(res => setCourses(res.data))
    .catch(err => {
      console.error("Error fetching courses", err);
      // Fallback for UI testing if backend is off
      setCourses([
        { _id: '1', courseCode: 'CSD201A', courseTitle: 'Data Structures Foundation', status: 'Pending HOD Approval' }
      ]);
    });
  }, [user]);

  const handleApprove = async (courseId) => {
    try {
      await axios.patch(`http://localhost:5000/api/courses/${courseId}/status`, 
        { status: 'Approved' },
        { headers: { 'user-id': user.id, 'user-role': user.role } }
      );
      setCourses(courses.map(c => c._id === courseId ? { ...c, status: 'Approved' } : c));
    } catch(e) { console.error(e); }
  };

  return (
    <div style={{ padding: '20px', color: '#0f172a' }}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Course Specifications</h2>
          <p>Manage and review course specifications</p>
        </div>
        {/* HARCODED BLUE BUTTON */}
        <Link 
          to="/create-course" 
          className="inline-flex items-center gap-2 font-semibold"
          style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}
        >
          <span>+</span> New Course Spec
        </Link>
      </div>

      <div className="rounded-xl overflow-hidden border" style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0' }}>
        <table className="min-w-full text-left">
          <thead style={{ backgroundColor: '#1e293b', color: '#ffffff' }}>
            <tr>
              <th className="p-4 font-semibold">Course Code</th>
              <th className="p-4 font-semibold">Course Title</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course._id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td className="p-4 font-bold">{course.courseCode}</td>
                <td className="p-4">{course.courseTitle}</td>
                <td className="p-4">
                  <span style={{ backgroundColor: '#f1f5f9', color: '#0f172a', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>
                    {course.status}
                  </span>
                </td>
                <td className="p-4 space-x-3">
                  {/* HARDCODED GRAY BUTTON */}
                  <button style={{ backgroundColor: '#e2e8f0', color: '#0f172a', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
                    View PDF
                  </button>
                  {/* HARDCODED GREEN BUTTON (Visible to HOD) */}
                  {user.role === 'hod' && course.status !== 'Approved' && (
                    <button 
                      onClick={() => handleApprove(course._id)}
                      style={{ backgroundColor: '#16a34a', color: '#ffffff', padding: '8px 16px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      Approve
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}