import { useState } from 'react';
import './ProjectForm.css';

const initialFormData = {
  projectName: '',
  description: '',
  managerName: '',
  managerEmail: '',
  startDate: '',
  budget: '',
};

function ProjectForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submittedProject, setSubmittedProject] = useState(null);

  // Update form values
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove the field's old error while the user corrects it
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: '',
    }));

    setSubmittedProject(null);
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};

    if (!formData.projectName.trim()) {
      newErrors.projectName = 'Project name is required.';
    } else if (formData.projectName.trim().length < 3) {
      newErrors.projectName = 'Project name must contain at least 3 characters.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required.';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must contain at least 10 characters.';
    }

    if (!formData.managerName.trim()) {
      newErrors.managerName = 'Project manager name is required.';
    } else if (formData.managerName.trim().length < 3) {
      newErrors.managerName = 'Manager name must contain at least 3 characters.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.managerEmail.trim()) {
      newErrors.managerEmail = 'Manager email is required.';
    } else if (!emailPattern.test(formData.managerEmail)) {
      newErrors.managerEmail = 'Enter a valid email address.';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required.';
    }

    if (!formData.budget) {
      newErrors.budget = 'Project budget is required.';
    } else if (Number(formData.budget) <= 0) {
      newErrors.budget = 'Budget must be greater than zero.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedProject(null);
      return;
    }

    const projectData = {
      ...formData,
      projectName: formData.projectName.trim(),
      description: formData.description.trim(),
      managerName: formData.managerName.trim(),
      managerEmail: formData.managerEmail.trim(),
      budget: Number(formData.budget),
    };

    // Display submitted data in the browser console
    console.log('Project submitted successfully:', projectData);

    // Display submitted data on the page
    setSubmittedProject(projectData);

    // Clear the form after successful submission
    setFormData(initialFormData);
    setErrors({});
  };

  // Reset form
  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmittedProject(null);
  };

  return (
    <div className="project-form-page">
      <div className="project-form-container">
        <h1>Register New Project</h1>
        <p className="form-subtitle">
          Enter the details below to register a new project.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="projectName">Project Name *</label>
            <input
              id="projectName"
              type="text"
              name="projectName"
              placeholder="Enter project name"
              value={formData.projectName}
              onChange={handleChange}
            />
            {errors.projectName && (
              <p className="field-error">{errors.projectName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Project Description *</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your project"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
            {errors.description && (
              <p className="field-error">{errors.description}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="managerName">Project Manager Name *</label>
            <input
              id="managerName"
              type="text"
              name="managerName"
              placeholder="Enter manager name"
              value={formData.managerName}
              onChange={handleChange}
            />
            {errors.managerName && (
              <p className="field-error">{errors.managerName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="managerEmail">Manager Email *</label>
            <input
              id="managerEmail"
              type="email"
              name="managerEmail"
              placeholder="example@gmail.com"
              value={formData.managerEmail}
              onChange={handleChange}
            />
            {errors.managerEmail && (
              <p className="field-error">{errors.managerEmail}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Project Start Date *</label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
            {errors.startDate && (
              <p className="field-error">{errors.startDate}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="budget">Project Budget (₹) *</label>
            <input
              id="budget"
              type="number"
              name="budget"
              placeholder="Enter project budget"
              min="0.01"
              step="0.01"
              value={formData.budget}
              onChange={handleChange}
            />
            {errors.budget && (
              <p className="field-error">{errors.budget}</p>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit Project
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>

        {submittedProject && (
          <div className="success-message">
            <h2>Project Submitted Successfully!</h2>
            <p><strong>Project:</strong> {submittedProject.projectName}</p>
            <p><strong>Description:</strong> {submittedProject.description}</p>
            <p><strong>Manager:</strong> {submittedProject.managerName}</p>
            <p><strong>Email:</strong> {submittedProject.managerEmail}</p>
            <p><strong>Start Date:</strong> {submittedProject.startDate}</p>
            <p>
              <strong>Budget:</strong>{' '}
              ₹{submittedProject.budget.toLocaleString('en-IN')}
            </p>
            <p className="frontend-note">
              This information is currently displayed in the frontend only.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectForm;