import React from "react";

const Header = ({onOpenAddModal, onHeaderDelete}) => {
  return (
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>
            Manage <b>Employees</b>
          </h2>
        </div>
        <div className="col-sm-6">
          <button className="btn btn-success" onClick={onOpenAddModal}>
            <i className="material-icons">&#xE147;</i>{" "}
            <span>Add New Employee</span>
          </button>
          <button
            className="btn btn-danger"
            onClick={onHeaderDelete}
          >
            <i className="material-icons">&#xE15C;</i> <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
