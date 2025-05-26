import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeModal from "./components/AddEmployeeModal";

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
  function onFormSubmit(formData) {
    setEmployees((prev) => [
      ...prev,
      {
        ...formData,
        id: Math.max(...prev.map((emp) => emp.id), 0) + 1,
      },
    ]);
  }
  return (
    <>
      <div className="container">
        <div className="table-wrapper">
          <Header onOpenAddModal={() => setIsAddModalOpen(true)} />
          <EmployeeList employees={employees} />
        </div>
      </div>
      <AddEmployeeModal
        isOpen={isAddModalOpen}
        onCloseAddModal={() => setIsAddModalOpen(false)}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
}

export default App;
