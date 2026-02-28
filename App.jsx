// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CourseForm from './components/CourseForm';

export default function App() {
  // MOCK AUTHENTICATION STATE
  const [user, setUser] = useState({ id: 'faculty123', role: 'faculty' });

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Course Specification Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">Streamlined academic course management</p>
            </div>
            
            {/* Mock Role Switcher */}
            <div className="flex items-center gap-3">
              <span className="text-slate-300 text-sm">Role:</span>
              <select 
                className="bg-slate-700 text-white px-3 py-2 rounded-lg border border-slate-600 hover:border-blue-400 transition-colors"
                value={user.role}
                onChange={(e) => setUser({ 
                  id: e.target.value === 'faculty' ? 'faculty123' : 'hod999', 
                  role: e.target.value 
                })}
              >
                <option value="faculty">Faculty Member</option>
                <option value="hod">Head of Department (HOD)</option>
              </select>
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Dashboard user={user} />} />
            <Route path="/create-course" element={<CourseForm user={user} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}