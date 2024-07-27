import generateUniqueId from 'generate-unique-id';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function StudentForm() {

    const [input, setInput] = useState({
        id:'',
        rollNo: '',
        sName: '',
        email: ''
    })

    const handleCreate = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            ...input,
            id: generateUniqueId({ useLetters: false, length: 1 })
        }

        setInput(obj)
        console.log("OBJ", obj);

        setInput({
            id:'',
            rollNo: '',
            sName: '',
            email: ''
        })

    }

    const navigate = useNavigate()

    const handleClickNav=()=>{
        navigate('/view')
    }

    return (
        <>
            <div class="login-box">
                <form onSubmit={handleSubmit}>
                    <div class="user-box">
                        <input type="number" name="rollNo" value={input.rollNo} onChange={handleCreate} />
                        <label>Roll Number</label>
                    </div>
                    <div class="user-box">
                        <input type="text" name="sName" value={input.sName} onChange={handleCreate} />
                        <label>Student Name</label>
                    </div>
                    <div class="user-box">
                        <input type="email" name="email" value={input.email} onChange={handleCreate} />
                        <label>Email</label>
                    </div>

                    <center>
                        <button>
                            <p onClick={handleClickNav}>Submit</p>
                        </button>
                    </center>



                </form>
            </div>
        </>
    )
}

export default StudentForm