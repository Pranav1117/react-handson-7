import React, { useState, useEffect, useMemo } from "react";
import { addNewStudentAction } from "../Redux/Actions/StudentActions";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateStudentDetailAction } from "../Redux/Actions/StudentActions";

function StudentForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = useParams();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  const isEdit = useMemo(() => {
    if (params.studentId) return true;
    else return false;
  }, [params]);

  useEffect(() => {
    const data = location.state;
    if (data) {
      setFormData(data);
    }
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddOrUpdate = () => {
    console.log("handleUpdate called");
    if (isEdit) {
      dispatch(updateStudentDetailAction(formData));
    } else {
      dispatch(
        addNewStudentAction({ ...formData, id: `id-${new Date().getTime()}` })
      );
    }
    goBack();
  };

  function goBack() {
    navigation(-1);
  }

  const isDisabled = () => {
    if (formData.name && formData.age && formData.batch && formData.course) {
      return false;
    }
    return true;
  };

  console.log("Formdata", formData, location, params, isEdit);

  return (
    <>
      <div className="h1heading"><h1>{isEdit ? "Edit Student Detail" : "Add New Student"}</h1></div>
      <div className="editpart">
        <div className="editpartinside">
        <div className="name">
        <fieldset>
            <legend>Name</legend>
            <input
              placeholder={"name"}
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            </fieldset>
        </div>
        <div className="age">
        <fieldset>
              <legend>Age</legend>
              <input
              placeholder={"age"}
              name="age"
              type={"number"}
              onChange={handleChange}
              value={formData.age}
            />
            </fieldset>
        </div>
        <div className="course">
        <fieldset>
              <legend>Course</legend>
              <input
              placeholder={"Course"}
              name="course"
              onChange={handleChange}
              value={formData.course}
            />
            </fieldset>
        </div>
        <div className="batch">
        <fieldset>
              <legend>Batch</legend>
              <input
              placeholder={"batch"}
              name="batch"
              onChange={handleChange}
              value={formData.batch}
            />
            </fieldset>
        </div>
        </div>     
     <div className="editpart_buttons">
          <div>
          <button className="btn-cancle"  onClick={goBack}>
            Cancel
          </button>
          </div>
          <div>
          <button className="btn-update"
            disabled={isDisabled()}
            onClick={handleAddOrUpdate}
          >
            {isEdit ? "Update" : "Add"}
          </button>
          </div>
          </div>
      </div>
    
    </>
  );
}

export default StudentForm;