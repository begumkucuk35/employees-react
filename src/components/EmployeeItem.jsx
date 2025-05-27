import React from 'react'

export const EmployeeItem = ({employee, onEditClick, onDeleteClick, isSelected, onToggleSelectedEmployee}) => {
  function handleEditClick(){
    onEditClick(employee)
  }
  function handleDeleteClick(){
    onDeleteClick(employee)
  }
  return (
    <tr>
          <td>
            <span className="custom-checkbox">
              <input
                type="checkbox"
                id="checkbox1"
                checked={isSelected}
                onChange={() => onToggleSelectedEmployee(employee.id)}
              />
              <label htmlFor="checkbox1"></label>
            </span>
          </td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>{employee.gender}</td>
          <td>{employee.department}</td>
          <td>
            <a onClick={handleEditClick} className="edit">
              <i className="material-icons" title="Edit">
                &#xE254;
              </i>
            </a>
            <a onClick={handleDeleteClick} className="delete">
              <i className="material-icons" title="Delete">
                &#xE872;
              </i>
            </a>
          </td>
        </tr>
  )
}
