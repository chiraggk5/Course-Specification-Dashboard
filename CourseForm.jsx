import React, { useState, useId } from 'react';

// --- Inline SVGs ---
const IconFileText = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>;
const IconSettings = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>;
const IconBookOpen = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const IconTarget = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>;
const IconCheckCircle = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
const IconPlus = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const IconTrash2 = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>;
const IconSave = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>;
const IconGrid = ({ size = 24, className = "" }) => <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;

export default function CourseForm() {
  const uid = useId();

  const [formData, setFormData] = useState({
    basicInfo: { courseTitle: '', courseCode: '', courseType: '', department: '', faculty: '' },
    summary: '',
    credits: { numberOfCredits: '', creditStructure: '', totalHours: '', weeksInSemester: '', departmentResponsible: '', totalMarks: '', passCriterion: '', attendanceRequirement: '' },
    outcomes: [{ id: `${uid}-outcome-0`, text: '' }],
    units: [{ id: `${uid}-unit-0`, title: '', content: '' }],
    coPoMap: {}, 
    teachingMethods: { lectures: '', demonstrations: '', numeracy: '', practical: '', others: '', exams: '', total: '' },
    assessment: { ceWeightage: '', seeWeightage: '', details: '' },
    resources: { essential: '', recommended: '', journals: '', websites: '', other: '' }
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleNestedChange = (category, field, value) => setFormData(prev => ({ ...prev, [category]: { ...prev[category], [field]: value } }));
  const handleTextChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const addOutcome = () => setFormData(prev => ({ ...prev, outcomes: [...prev.outcomes, { id: Date.now(), text: '' }] }));
  const updateOutcome = (id, text) => setFormData(prev => ({ ...prev, outcomes: prev.outcomes.map(o => o.id === id ? { ...o, text } : o) }));
  const removeOutcome = (id) => setFormData(prev => ({ ...prev, outcomes: prev.outcomes.filter(o => o.id !== id) }));

  const addUnit = () => setFormData(prev => ({ ...prev, units: [...prev.units, { id: Date.now(), title: '', content: '' }] }));
  const updateUnit = (id, field, value) => setFormData(prev => ({ ...prev, units: prev.units.map(u => u.id === id ? { ...u, [field]: value } : u) }));
  const removeUnit = (id) => setFormData(prev => ({ ...prev, units: prev.units.filter(u => u.id !== id) }));

  const handleMapChange = (coIndex, targetType, targetNum, value) => {
    const key = `co${coIndex + 1}_${targetType}${targetNum}`;
    setFormData(prev => ({ ...prev, coPoMap: { ...prev.coPoMap, [key]: value } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  // Base input class enforcing dark text
  const inputStyles = "w-full p-3 bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm";

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans text-slate-900">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Header */}
        <div className="bg-blue-800 text-white p-8 rounded-2xl shadow-lg flex items-center gap-5">
          <div className="bg-blue-700/50 p-3 rounded-lg"><IconFileText size={40} className="text-blue-100" /></div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Course Specification Generator</h1>
            <p className="text-blue-200 mt-2 text-sm md:text-base">Draft a new curriculum document.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
            
          {/* Section 0: Header Information */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconSettings size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">Header Information</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Course Title <span className="text-red-500">*</span></label>
                <input type="text" className={inputStyles} placeholder="e.g., Data Structures Foundation" value={formData.basicInfo.courseTitle} onChange={(e) => handleNestedChange('basicInfo', 'courseTitle', e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Course Code <span className="text-red-500">*</span></label>
                <input type="text" className={inputStyles} placeholder="e.g., CSD201A" value={formData.basicInfo.courseCode} onChange={(e) => handleNestedChange('basicInfo', 'courseCode', e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Course Type</label>
                <input type="text" className={inputStyles} placeholder="e.g., Core Theory, Elective" value={formData.basicInfo.courseType} onChange={(e) => handleNestedChange('basicInfo', 'courseType', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Department</label>
                <input type="text" className={inputStyles} placeholder="e.g., Computer Science and Engineering" value={formData.basicInfo.department} onChange={(e) => handleNestedChange('basicInfo', 'department', e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-slate-800 mb-2">Faculty</label>
                <input type="text" className={inputStyles} placeholder="e.g., Faculty of Engineering and Technology" value={formData.basicInfo.faculty} onChange={(e) => handleNestedChange('basicInfo', 'faculty', e.target.value)} />
              </div>
            </div>
          </section>

          {/* Section 1: Course Summary */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconBookOpen size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">1. Course Summary</h2>
            </div>
            <div className="p-8 bg-white">
              <textarea rows="4" className={`${inputStyles} resize-y leading-relaxed`} placeholder="Provide a comprehensive summary of the course objectives, scope, and expected outcomes..." value={formData.summary} onChange={(e) => handleTextChange('summary', e.target.value)} required />
            </div>
          </section>

          {/* Section 2: Course Size and Credits */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconTarget size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">2. Course Size and Credits</h2>
            </div>
            <div className="p-8 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Number of Credits', key: 'numberOfCredits', placeholder: 'e.g., 03' },
                  { label: 'Credit Structure', key: 'creditStructure', placeholder: 'e.g., 3:0:0' },
                  { label: 'Total Hours', key: 'totalHours', placeholder: 'e.g., 45' },
                  { label: 'Weeks in Semester', key: 'weeksInSemester', placeholder: 'e.g., 15' },
                  { label: 'Dept. Responsible', key: 'departmentResponsible', placeholder: 'e.g., CSE' },
                  { label: 'Total Marks', key: 'totalMarks', placeholder: 'e.g., 100' },
                  { label: 'Pass Criterion', key: 'passCriterion', placeholder: 'e.g., As per regs' },
                  { label: 'Attendance Req.', key: 'attendanceRequirement', placeholder: 'e.g., 75%' }
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">{field.label}</label>
                    <input type="text" className={inputStyles} placeholder={field.placeholder} value={formData.credits[field.key]} onChange={(e) => handleNestedChange('credits', field.key, e.target.value)} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Course Outcomes */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconCheckCircle size={22} className="text-blue-700"/>
                <h2 className="text-xl font-extrabold text-slate-900">3. Course Outcomes (COs)</h2>
              </div>
              <button type="button" onClick={addOutcome} className="text-sm bg-blue-200 text-blue-900 font-extrabold px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-300 transition shadow-sm border border-blue-300">
                <IconPlus size={16} /> Add Outcome
              </button>
            </div>
            <div className="p-8 space-y-4 bg-white">
              {formData.outcomes.map((outcome, index) => (
                <div key={outcome.id} className="flex gap-4 items-start group">
                  <span className="font-extrabold text-slate-800 mt-3 min-w-[3rem]">CO-{index + 1}:</span>
                  <input type="text" className={inputStyles} placeholder="e.g., Describe Linear and Non-Linear data structures..." value={outcome.text} onChange={(e) => updateOutcome(outcome.id, e.target.value)} required />
                  <button type="button" onClick={() => removeOutcome(outcome.id)} className="p-3 text-red-700 bg-red-100 hover:text-white hover:bg-red-600 rounded-lg transition mt-0 shadow-sm border border-red-300">
                    <IconTrash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Course Contents */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <IconBookOpen size={22} className="text-blue-700"/>
                <h2 className="text-xl font-extrabold text-slate-900">4. Course Contents</h2>
              </div>
              <button type="button" onClick={addUnit} className="text-sm bg-blue-200 text-blue-900 font-extrabold px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-blue-300 transition shadow-sm border border-blue-300">
                <IconPlus size={16} /> Add Unit
              </button>
            </div>
            <div className="p-8 space-y-6 bg-white">
              {formData.units.map((unit, index) => (
                <div key={unit.id} className="bg-slate-50 border border-slate-300 rounded-xl p-6 shadow-sm relative">
                  <div className="absolute top-4 right-4">
                    <button type="button" onClick={() => removeUnit(unit.id)} className="text-red-700 bg-white hover:text-white hover:bg-red-600 border border-red-300 p-2 rounded shadow-sm transition">
                      <IconTrash2 size={18} />
                    </button>
                  </div>
                  <div className="mb-4 pr-12">
                    <label className="block text-sm font-extrabold text-slate-900 mb-2">Unit {index + 1} Title</label>
                    <input type="text" className={inputStyles} placeholder="e.g., Stacks, Queues, and Deques" value={unit.title} onChange={(e) => updateUnit(unit.id, 'title', e.target.value)} required />
                  </div>
                  <div>
                    <label className="block text-sm font-extrabold text-slate-900 mb-2">Contents / Topics</label>
                    <textarea rows="3" className={`${inputStyles} resize-y`} placeholder="List specific topics covered in this unit..." value={unit.content} onChange={(e) => updateUnit(unit.id, 'content', e.target.value)} required />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: CO-PO Mapping Matrix */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconGrid size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">5. CO-PO Mapping</h2>
            </div>
            <div className="p-8 bg-white">
              <p className="text-sm text-slate-600 mb-6 font-bold">Enter values <strong className="text-black">1 (Moderate)</strong>, <strong className="text-black">2 (Strong)</strong>, or <strong className="text-black">3 (Very Strong)</strong>. Leave blank if not applicable.</p>
              
              <div className="overflow-x-auto border border-slate-300 rounded-xl shadow-sm pb-2">
                <table className="min-w-max w-full text-sm text-center border-collapse bg-white">
                  <thead className="bg-slate-100 text-slate-900">
                    <tr>
                      <th className="p-3 border-b border-r border-slate-300 sticky left-0 bg-slate-100 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">CO</th>
                      {[...Array(12)].map((_, i) => <th key={`po${i+1}`} className="p-2 border-b border-r border-slate-300 font-extrabold min-w-[50px]">PO-{i+1}</th>)}
                      {[...Array(3)].map((_, i) => <th key={`pso${i+1}`} className="p-2 border-b border-r border-slate-300 font-extrabold bg-blue-100 min-w-[60px]">PSO-{i+1}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {formData.outcomes.map((_, coIndex) => (
                      <tr key={`map-co${coIndex}`} className="hover:bg-slate-50 transition border-b border-slate-300 last:border-0">
                        <td className="p-3 border-r border-slate-300 font-extrabold text-slate-900 sticky left-0 bg-slate-50 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">CO-{coIndex + 1}</td>
                        {[...Array(12)].map((_, poIndex) => (
                          <td key={`po${poIndex}`} className="p-2 border-r border-slate-300">
                            <input type="number" min="1" max="3" className="w-14 p-2 text-center bg-white text-slate-900 border border-slate-400 rounded focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                                   onChange={(e) => handleMapChange(coIndex, 'po', poIndex + 1, e.target.value)} />
                          </td>
                        ))}
                        {[...Array(3)].map((_, psoIndex) => (
                          <td key={`pso${psoIndex}`} className="p-2 border-r border-slate-300 bg-blue-50">
                            <input type="number" min="1" max="3" className="w-14 p-2 text-center bg-white text-slate-900 border border-slate-400 rounded focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
                                   onChange={(e) => handleMapChange(coIndex, 'pso', psoIndex + 1, e.target.value)} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 6: Teaching & Learning Methods */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconSettings size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">6. Teaching & Learning Methods (Durations)</h2>
            </div>
            <div className="p-8 bg-white">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: 'Face to Face Lectures', key: 'lectures' },
                  { label: 'Demonstrations', key: 'demonstrations' },
                  { label: 'Numeracy', key: 'numeracy' },
                  { label: 'Practical Work', key: 'practical' },
                  { label: 'Others', key: 'others' },
                  { label: 'Term Tests / Exams', key: 'exams' },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-extrabold text-slate-800 mb-2">{field.label}</label>
                    <div className="flex items-center gap-3">
                      <input type="number" className="w-24 p-3 bg-white text-slate-900 placeholder-slate-400 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500 outline-none shadow-sm" 
                             placeholder="e.g. 15" value={formData.teachingMethods[field.key]} onChange={(e) => handleNestedChange('teachingMethods', field.key, e.target.value)} />
                      <span className="text-sm font-bold text-slate-600">hours</span>
                    </div>
                  </div>
                ))}
                <div className="col-span-full mt-4 pt-6 border-t border-slate-300">
                   <label className="block text-lg font-extrabold text-slate-900 mb-2">Total Duration in Hours</label>
                   <div className="flex items-center gap-3">
                     <input type="number" className="w-32 p-3 text-lg font-bold text-slate-900 bg-white border-2 border-slate-400 rounded focus:ring-2 focus:ring-blue-600 outline-none shadow-sm" 
                            placeholder="e.g. 55" value={formData.teachingMethods.total} onChange={(e) => handleNestedChange('teachingMethods', 'total', e.target.value)} required />
                     <span className="text-sm font-bold text-slate-600">Total Hours</span>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Course Assessment */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconTarget size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">7. Course Assessment</h2>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
              <div>
                <label className="block text-sm font-extrabold text-slate-800 mb-2">Continuous Evaluation (CE) %</label>
                <input type="text" className={inputStyles} placeholder="e.g., 50" value={formData.assessment.ceWeightage} onChange={(e) => handleNestedChange('assessment', 'ceWeightage', e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-extrabold text-slate-800 mb-2">Semester End Evaluation (SEE) %</label>
                <input type="text" className={inputStyles} placeholder="e.g., 50" value={formData.assessment.seeWeightage} onChange={(e) => handleNestedChange('assessment', 'seeWeightage', e.target.value)} />
              </div>
            </div>
          </section>

          {/* Section 9: Course Resources */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-300 overflow-hidden">
            <div className="bg-slate-100 border-b border-slate-300 px-8 py-5 flex items-center gap-3">
              <IconBookOpen size={22} className="text-blue-700"/>
              <h2 className="text-xl font-extrabold text-slate-900">9. Course Resources</h2>
            </div>
            <div className="p-8 space-y-6 bg-white">
              {[
                { label: 'a. Essential Reading', key: 'essential', placeholder: 'List main textbooks...' },
                { label: 'b. Recommended Reading', key: 'recommended', placeholder: 'List supplementary books...' },
                { label: 'c. Magazines and Journals', key: 'journals', placeholder: 'List relevant journals...' },
                { label: 'd. Websites', key: 'websites', placeholder: 'e.g., https://coursera.org' },
                { label: 'e. Other Electronic Resources', key: 'other', placeholder: 'Any other resources...' }
              ].map((res) => (
                <div key={res.key}>
                  <label className="block text-sm font-extrabold text-slate-800 mb-2">{res.label}</label>
                  <textarea rows="2" className={`${inputStyles} resize-y`} placeholder={res.placeholder} value={formData.resources[res.key]} onChange={(e) => handleNestedChange('resources', res.key, e.target.value)} />
                </div>
              ))}
            </div>
          </section>

          {/* Form Actions - Highly Visible Primary Button */}
          <div className="sticky bottom-4 z-50 bg-slate-100/95 backdrop-blur-md p-6 border-2 border-slate-300 rounded-2xl shadow-2xl flex justify-end">
            <button type="submit" className="bg-blue-700 text-white px-10 py-4 rounded-xl font-extrabold text-lg shadow-lg hover:bg-black transition-all flex items-center gap-3">
              <IconSave size={24} /> Review & Prepare Document
            </button>
          </div>
        </form>
      </div>

        {/* JSON Preview Modal */}
      {showPreview && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ backgroundColor: '#ffffff', width: '800px', maxWidth: '90%', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh' }}>
            <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8fafc' }}>
              <h3 style={{ margin: 0, color: '#0f172a' }}>Data Ready for Backend Integration</h3>
              <button onClick={() => setShowPreview(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
            <div style={{ padding: '20px', overflowY: 'auto', backgroundColor: '#1e293b', color: '#10b981', fontFamily: 'monospace', flex: 1 }}>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
            <div style={{ padding: '20px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end', gap: '15px', backgroundColor: '#f8fafc' }}>
              <button onClick={() => setShowPreview(false)} style={{ backgroundColor: '#132e51', color: '#0f172a', padding: '12px 24px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Close & Edit
              </button>
              <button style={{ backgroundColor: '#059669', color: '#ffffff', padding: '12px 24px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Submit to Node.js (Milestone 4)
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}