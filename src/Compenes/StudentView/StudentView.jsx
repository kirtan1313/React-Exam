import React, { useEffect } from 'react';
import { deleteStudent, fetchStudents } from '../server/Action/studentAction';
import { useDispatch, useSelector } from 'react-redux';

function StudentView() {
    const dispatch = useDispatch();
    const { students = [], loading = false, error = null } = useSelector(state => state.studentReducer || {});

    useEffect(() => {
        dispatch(fetchStudents());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Roll No</th>
                    <th>First Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.rollNo}</td>
                        <td>{student.sName}</td>
                        <td>{student.email}</td>
                        <td>
                            <button onClick={() => handleDelete(student.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default StudentView;
