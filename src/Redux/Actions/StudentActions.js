export const ADD_NEW_STUDENT = "ADD_NEW_STUDENT";
export const GET_STUDENT_DETAILS = "GET_STUDENT_DETAILS";
export const UPDATE_STUDENT_DETAIL = "UPDATE_STUDENT_DETAIL";
export const DELETE_STUDENT_DETAIL = "DELETE_STUDENT_DETAIL";

export const getStudentDetailAction = (payload) => {
  return {
    type: GET_STUDENT_DETAILS,
    payload,
  };
};

export const addNewStudentAction = (payload) => {
  console.log("addNewStudentAction called", payload);
  return {
    type: ADD_NEW_STUDENT,
    payload,
  };
};

export const updateStudentDetailAction = (payload) => {
  console.log("updateStudentDetailAction called", payload);
  return {
    type: UPDATE_STUDENT_DETAIL,
    payload,
  };
};
export const deleteStudentDetailAction = (payload) => {
  return {
    type: DELETE_STUDENT_DETAIL,
    payload,
  };
};