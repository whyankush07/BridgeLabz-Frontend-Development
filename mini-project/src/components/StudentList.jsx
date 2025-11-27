import PropTypes from 'prop-types';

function StudentList({
  students,
  onLoadStudents,
  onAddStudent,
  onEditStudent,
  onDeleteStudent,
  onViewStudent,
  isLoading
}) {
  return (
    <section className="card">
      <div className="card__header">
        <div>
          <h2>Student Records</h2>
          <p>Load data from JSON Server and manage every record manually.</p>
        </div>
        <div className="action-row">
          <button type="button" className="btn" onClick={onLoadStudents} disabled={isLoading}>
            {isLoading ? 'Loading…' : 'Load Students'}
          </button>
          <button type="button" className="btn btn--primary" onClick={onAddStudent}>
            Add Student
          </button>
        </div>
      </div>

      {students.length === 0 ? (
        <p className="empty-state">No students to show. Click "Load Students" to fetch data.</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Section</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.section}</td>
                  <td>{student.marks}</td>
                  <td>{student.grade}</td>
                  <td>
                    <div className="table-actions">
                      <button type="button" className="btn btn--ghost" onClick={() => onViewStudent(student)}>
                        View
                      </button>
                      <button type="button" className="btn btn--ghost" onClick={() => onEditStudent(student)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn--danger"
                        onClick={() => onDeleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      marks: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      grade: PropTypes.string.isRequired
    })
  ).isRequired,
  onLoadStudents: PropTypes.func.isRequired,
  onAddStudent: PropTypes.func.isRequired,
  onEditStudent: PropTypes.func.isRequired,
  onDeleteStudent: PropTypes.func.isRequired,
  onViewStudent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
};

StudentList.defaultProps = {
  isLoading: false
};

export default StudentList;
