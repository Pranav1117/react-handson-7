import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../Component/Navbar";
import { deleteStudentDetailAction } from "../Redux/Actions/StudentActions";

function StudentList() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const studentList = useSelector(
    (state) => state?.studentReducer?.studentList
  );

  const handleAddNewStudent = () => {
    navigation("/addStudent");
  };

  const handleEditStudent = (item) => {
    console.log("edit button item", item);
    navigation(`/editStudent/${item.id}`, { state: item });
  };

  const handleDeleteStudent = (id) => {
    console.log("handleDeleteStudent function called");
    dispatch(deleteStudentDetailAction(id));
  };

  console.log("studentList", studentList);

  return (
    <>
      <NavBar />
      <br />
      <br />
      <div className="tablehead">
        <h1>Students Details</h1>
        <button onClick={handleAddNewStudent}>Add New Student</button>
      </div>
      <br />
      <br />
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList?.map((item, index) => {
              console.log(item);
              return (
                <>
                <tr key={index}>
                  <td>{item?.name}</td>
                  <td>{item?.age}</td>
                  <td>{item?.course}</td>
                  <td>{item?.batch}</td>
                  <td>
                    <div className="action_buttons">
                      <button onClick={() => handleEditStudent(item)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteStudent(item.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;