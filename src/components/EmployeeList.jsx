import React from "react";
import { EmployeeItem } from "./EmployeeItem";

const EmployeeList = ({employees, onEditClick}) => {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
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
            <EmployeeItem employee={employee} key={employee.id} onEditClick={onEditClick}/>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
