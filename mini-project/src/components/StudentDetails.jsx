import PropTypes from 'prop-types';

function StudentDetails({ student, onBack }) {
  if (!student) {
    return null;
  }

  return (
    <section className="card">
      <div className="card__header">
        <div>
          <h2>Student Details</h2>
          <p>Review the complete record in a read-only view.</p>
        </div>
        <button type="button" className="btn" onClick={onBack}>
          Back to List
        </button>
      </div>

      <div className="details-grid">
        <article>
          <p className="label">Name</p>
          <p className="value">{student.name}</p>
        </article>
        <article>
          <p className="label">Section</p>
          <p className="value">{student.section}</p>
        </article>
        <article>
          <p className="label">Marks</p>
          <p className="value">{student.marks}</p>
        </article>
        <article>
          <p className="label">Grade</p>
          <p className="value">{student.grade}</p>
        </article>
      </div>
    </section>
  );
}

StudentDetails.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    section: PropTypes.string,
    marks: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    grade: PropTypes.string
  }),
  onBack: PropTypes.func.isRequired
};

StudentDetails.defaultProps = {
  student: null
};

export default StudentDetails;
