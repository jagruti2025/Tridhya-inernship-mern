import { useState } from "react";
import "./App.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    taskName: "",
    description: "",
    priority: "",
    Date: "",
    assignee: ""
  });

  const [errors, setErrors] = useState({});
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.taskName.trim()) {
      newErrors.taskName = "Task name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    if (!formData.priority) {
      newErrors.priority = "Please select a priority";
    }

    if (!formData.Date) {
      newErrors.Date = "Due date is required";
    } else {
      const selectedDate = new Date(formData.Date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.Date = "date cannot be in the past";
      }
    }

    if (!formData.assignee.trim()) {
      newErrors.assignee = "Assignee name is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newTask = {
      id: Date.now(),
      ...formData
    };

    setTasks((prev) => [...prev, newTask]);

    setFormData({
      taskName: "",
      description: "",
      priority: "",
      Date: "",
      assignee: ""
    });

    setErrors({});
  };

  return (
    <div className="task-form-container">
      <h2>Task Registration Form</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Task Name</label>
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            placeholder="Enter TaskName"
          />
          {errors.taskName && <p className="error">{errors.taskName}</p>}
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe The task in Detail"
          />
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <p className="error">{errors.priority}</p>}
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
          />
          {errors.Date && <p className="error">{errors.Date}</p>}
        </div>

        <div className="form-group">
          <label>Assignee</label>
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            placeholder=" Ciya"
          />
          {errors.assignee && <p className="error">{errors.assignee}</p>}
        </div>

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        <h3>Registered Tasks ({tasks.length})</h3>
        {tasks.length === 0 ? (
          <p className="empty-state"> No Tasks added yet. </p>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="task-card">
              <h4>{task.taskName}</h4>
              <p>{task.description}</p>
              <div className="task-meta">
                <span className={`badge ${task.priority}`}>{task.priority}</span>
                <span>Due: {task.Date}</span>
                <span>Assignee: {task.assignee}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
