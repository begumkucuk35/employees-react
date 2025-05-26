import React, { useState } from "react";

const AddEmployeeModal = ({ isOpen, onCloseAddModal, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
    department: "",
  });
  function onFormDataChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    onFormSubmit(formData);
    onCloseAddModal();
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      gender: "",
      department: "",
    });
  }
  function handleCancel() {
    onCloseAddModal();
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      gender: "",
      department: "",
    });
  }
  if (!isOpen) return null;
  return (
    <>
      <div id="addEmployeeModal" className="modal fade show">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Add Employee</h4>
                <button
                  type="button"
                  className="close"
                  onClick={handleCancel}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={onFormDataChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={onFormDataChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    className="form-control"
                    name="address"
                    value={formData.adress}
                    onChange={onFormDataChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={formData.phone}
                    onChange={onFormDataChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender == "Male"}
                      onChange={onFormDataChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender == "Female"}
                      onChange={onFormDataChange}
                    />
                    Female
                  </label>
                </div>
                <div className="form-group">
                  <label>Department</label>
                  <div>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={onFormDataChange}
                    >
                      <option value="" disabled>
                        Select Department
                      </option>
                      <option value="finance">Finance</option>
                      <option value="hr">HR</option>
                      <option value="development">Development</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default AddEmployeeModal;
