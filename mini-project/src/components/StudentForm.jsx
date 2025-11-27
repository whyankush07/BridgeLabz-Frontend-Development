import { useState } from 'react';
import PropTypes from 'prop-types';

const initialFormState = {
  name: '',
  section: '',
  marks: '',
  grade: ''
};

function StudentForm({ mode, initialData, onCancel, onSubmit }) {
  const [formValues, setFormValues] = useState(() => ({
    ...initialFormState,
    ...initialData,
    marks: initialData?.marks !== undefined ? String(initialData.marks) : ''
  }));

  const title = mode === 'edit' ? 'Edit Student' : 'Add Student';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formValues.name.trim()) {
      alert('Please enter the student name.');
      return;
    }

    if (!formValues.section.trim()) {
      alert('Please enter the section.');
      return;
    }

    const marksNumber = Number(formValues.marks);
    if (Number.isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
      alert('Marks should be a number between 0 and 100.');
      return;
    }

    if (!formValues.grade.trim()) {
      alert('Please enter a grade.');
      return;
    }

    onSubmit({
      ...initialData,
      name: formValues.name.trim(),
      section: formValues.section.trim(),
      marks: marksNumber,
      grade: formValues.grade.trim().toUpperCase()
    });
  };

  const handleReset = () => {
    setFormValues({
      ...initialFormState,
      ...initialData,
      marks: initialData?.marks !== undefined ? String(initialData.marks) : ''
    });
  };

  return (
    <section className="card">
      <div className="card__header">
        <div>
          <h2>{title}</h2>
          <p>Fill in all the details and submit to persist data in JSON Server.</p>
        </div>
        <button type="button" className="btn" onClick={onCancel}>
          Back to List
        </button>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formValues.name} onChange={handleChange} placeholder="Jane Doe" />
        </label>

        <label>
          Section
          <input name="section" value={formValues.section} onChange={handleChange} placeholder="A" />
        </label>

        <label>
          Marks
          <input
            name="marks"
            type="number"
            min="0"
            max="100"
            value={formValues.marks}
            onChange={handleChange}
            placeholder="95"
          />
        </label>

        <label>
          Grade
          <input name="grade" value={formValues.grade} onChange={handleChange} placeholder="A" />
        </label>

        <div className="form__actions">
          <button type="button" className="btn" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="btn btn--primary">
            {mode === 'edit' ? 'Save Changes' : 'Add Student'}
          </button>
        </div>
      </form>
    </section>
  );
}

StudentForm.propTypes = {
  mode: PropTypes.oneOf(['add', 'edit']),
  initialData: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    section: PropTypes.string,
    marks: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    grade: PropTypes.string
  }),
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

StudentForm.defaultProps = {
  mode: 'add',
  initialData: initialFormState
};

export default StudentForm;
