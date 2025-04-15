import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Begüm",
      email: "try@mail.com",
      address: "non non nonn",
      phone: "(171) 555-2222"
    }
  ])
  return (
    <div className="container">
      <div className="table-wrapper">
        <Header />
        <EmployeeList employees={employees}/>
      </div>
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
