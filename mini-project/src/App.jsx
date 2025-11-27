import { useState } from 'react';
import './App.css';
import StudentList from './components/StudentList.jsx';
import StudentForm from './components/StudentForm.jsx';
import StudentDetails from './components/StudentDetails.jsx';
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent
} from './services/studentService.js';

const VIEWS = {
  LIST: 'list',
  FORM: 'form',
  DETAILS: 'details'
};

function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState(VIEWS.LIST);
  const [activeStudent, setActiveStudent] = useState(null);
  const [formMode, setFormMode] = useState('add');
  const [statusMessage, setStatusMessage] = useState('');
  const [isBusy, setIsBusy] = useState(false);

  const handleLoadStudents = async () => {
    try {
      setIsBusy(true);
      const data = await getStudents();
      setStudents(data);
      setStatusMessage(`Loaded ${data.length} student${data.length === 1 ? '' : 's'}.`);
    } catch (error) {
      setStatusMessage(error.message || 'Unable to load students.');
    } finally {
      setIsBusy(false);
    }
  };

  const handleAddStudent = () => {
    setFormMode('add');
    setActiveStudent(null);
    setView(VIEWS.FORM);
  };

  const handleEditStudent = (student) => {
    setFormMode('edit');
    setActiveStudent(student);
    setView(VIEWS.FORM);
  };

  const handleViewStudent = (student) => {
    setActiveStudent(student);
    setView(VIEWS.DETAILS);
  };

  const handleDeleteStudent = async (studentId) => {
    const confirmed = window.confirm('Delete this student record permanently?');
    if (!confirmed) {
      return;
    }

    try {
      setIsBusy(true);
      await deleteStudent(studentId);
      alert('Student deleted. Click "Load Students" to refresh the list.');
      setStatusMessage('Record deleted from JSON Server.');
    } catch (error) {
      alert(error.message || 'Unable to delete student right now.');
    } finally {
      setIsBusy(false);
    }
  };

  const handleSubmitForm = async (formValues) => {
    try {
      setIsBusy(true);
      if (formMode === 'edit' && activeStudent) {
        await updateStudent(activeStudent.id, formValues);
        alert('Student updated. Click "Load Students" to view the latest data.');
        setStatusMessage('Student updated successfully.');
      } else {
        await createStudent(formValues);
        alert('Student added. Click "Load Students" to pull the latest list.');
        setStatusMessage('Student added successfully.');
      }
      setActiveStudent(null);
      setView(VIEWS.LIST);
    } catch (error) {
      alert(error.message || 'Unable to save student.');
    } finally {
      setIsBusy(false);
    }
  };

  const handleBackToList = () => {
    setView(VIEWS.LIST);
    setActiveStudent(null);
  };

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Mini Project</p>
          <h1>Student Result Management System</h1>
          <p className="subtitle">Perform Add, View, Edit, Delete, and Detail actions using buttons only.</p>
        </div>
      </header>

      {statusMessage && <p className="status-message">{statusMessage}</p>}

      {view === VIEWS.LIST && (
        <StudentList
          students={students}
          onLoadStudents={handleLoadStudents}
          onAddStudent={handleAddStudent}
          onEditStudent={handleEditStudent}
          onDeleteStudent={handleDeleteStudent}
          onViewStudent={handleViewStudent}
          isLoading={isBusy}
        />
      )}

      {view === VIEWS.FORM && (
        <StudentForm
          key={`${formMode}-${activeStudent?.id ?? 'new'}`}
          mode={formMode}
          initialData={activeStudent ?? undefined}
          onCancel={handleBackToList}
          onSubmit={handleSubmitForm}
        />
      )}

      {view === VIEWS.DETAILS && (
        <StudentDetails student={activeStudent} onBack={handleBackToList} />
      )}
    </main>
  );
}

export default App;
