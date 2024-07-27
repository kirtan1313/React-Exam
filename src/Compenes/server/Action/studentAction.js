export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
// import axiosInstance from './path/to/axiosInstance';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';
export const ADD_STUDENT_REQUEST = 'ADD_STUDENT_REQUEST';
export const ADD_STUDENT_SUCCESS = 'ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_FAILURE = 'ADD_STUDENT_FAILURE';
export const UPDATE_STUDENT_REQUEST = 'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS = 'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE = 'UPDATE_STUDENT_FAILURE';
export const DELETE_STUDENT_REQUEST = 'DELETE_STUDENT_REQUEST';
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE';


export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });
  try {
    const response = await axiosInstance.get('/students');
    dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_STUDENTS_FAILURE, error: error.message });
  }
};


export const addStudent = (student) => async (dispatch) => {
  dispatch({ type: ADD_STUDENT_REQUEST });
  try {
    const response = await axiosInstance.post('/students', student);
    dispatch({ type: ADD_STUDENT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ADD_STUDENT_FAILURE, error: error.message });
  }
};


export const updateStudent = (id, updatedStudent) => async (dispatch) => {
  dispatch({ type: UPDATE_STUDENT_REQUEST });
  try {
    const response = await axiosInstance.put(`/students/${id}`, updatedStudent);
    dispatch({ type: UPDATE_STUDENT_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_STUDENT_FAILURE, error: error.message });
  }
};


export const deleteStudent = (id) => async (dispatch) => {
  dispatch({ type: DELETE_STUDENT_REQUEST });
  try {
    await axiosInstance.delete(`/students/${id}`);
    dispatch({ type: DELETE_STUDENT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_STUDENT_FAILURE, error: error.message });
  }
};
