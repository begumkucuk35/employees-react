import React from "react";
import { EmployeeItem } from "./EmployeeItem";

const EmployeeList = ({
  employees,
  onEditClick,
  onDeleteClick,
  selectedEmployees,
  setSelectedEmployees,
}) => {

  function toggleSelectAll(e){
    if (e.target.checked) {
      setSelectedEmployees(employees.map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  }

  function toggleSelectedEmployee(employeeId){
    setSelectedEmployees(prevSelected => 
      prevSelected.includes(employeeId) ? prevSelected.filter(id => id !== employeeId) : [...prevSelected, employeeId]
    )
  }
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="selectAll"
                checked={
                  employees.length > 0 &&
                  selectedEmployees.length == employees.length
                }
                onChange={toggleSelectAll}
              />
              <label htmlFor="selectAll"></label>
            </span>
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeItem
            employee={employee}
            key={employee.id}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
            isSelected = {selectedEmployees.includes(employee.id)}
            onToggleSelectedEmployee={toggleSelectedEmployee}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
