import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeModal from "./components/AddEmployeeModal";
import EditEmployeeModal from "./components/EditEmployeeModal";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Begüm",
      email: "try@mail.com",
      address: "non non nonn",
      phone: "(171) 555-2222",
      gender: "Female",
      department: "hr",
    },
    {
      id: 2,
      name: "Begüm22",
      email: "try@mail.com22",
      address: "non non nonn222",
      phone: "(171) 555-0000",
      gender: "Female",
      department: "development",
    },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  function onFormSubmit(formData) {
    setEmployees((prev) => [
      ...prev,
      {
        ...formData,
        id: Math.max(...prev.map((emp) => emp.id), 0) + 1,
      },
    ]);
  }
  function editFormSubmit(updatedEmployee) {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  }
  function editClick(employee) {
    setIsEditModalOpen(true);
    setSelectedEmployee(employee);
  }
  function deleteClick(employee) {
    const confirmed = window.confirm(
      `Are you sure you want to delete ${employee.name}?`
    );

    if (confirmed) {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((emp) => emp.id !== employee.id)
      );
      setSelectedEmployees([]);
    }
  }
  function headerDelete() {
    if (selectedEmployees.length === 0) {
      window.alert("Please select at least one employee to delete");
    } else {
      const confirmed = window.confirm(
        `Are you sure you want to delete the selected employees?`
      );

      if (confirmed) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => !selectedEmployees.includes(emp.id))
        );
        setSelectedEmployees([]);
      }
    }
  }
  function closeEditModal() {
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  }
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <Header
            onOpenAddModal={() => setIsAddModalOpen(true)}
            onHeaderDelete={headerDelete}
          />
          <EmployeeList
            employees={employees}
            onEditClick={editClick}
            onDeleteClick={deleteClick}
            selectedEmployees={selectedEmployees}
            setSelectedEmployees={setSelectedEmployees}
          />
        </div>
      </div>
      <AddEmployeeModal
        isOpen={isAddModalOpen}
        onCloseAddModal={() => setIsAddModalOpen(false)}
        onFormSubmit={onFormSubmit}
      />
      <EditEmployeeModal
        isOpen={isEditModalOpen}
        employee={selectedEmployee}
        onCloseEditModal={closeEditModal}
        onEditFormSubmit={editFormSubmit}
      />
    </>
  );
}

export default App;
