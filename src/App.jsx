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
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  function onFormSubmit(formData) {
    setEmployees((prev) => [
      ...prev,
      {
        ...formData,
        id: Math.max(...prev.map((emp) => emp.id), 0) + 1,
      },
    ]);
  } 
  function editFormSubmit(updatedEmployee){
    setEmployees(prevEmployees => 
        prevEmployees.map(emp => 
            emp.id === updatedEmployee.id ? updatedEmployee : emp
        )
    )
  }
  function editClick(employee) {
    setIsEditModalOpen(true);
    setSelectedEmployee(employee);
  }
  function closeEditModal(){
    setIsEditModalOpen(false);
    setSelectedEmployee(null);
  }
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
          <EmployeeList employees={employees} onEditClick={editClick} />
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
