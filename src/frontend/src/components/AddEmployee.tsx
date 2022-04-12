import React, { useState } from 'react'

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [hours, setHours] = useState("");
    const [project, setProject] = useState("");

    const saveEmployee = (e: any) => {
        e.preventDefault();

        const employee = {
            firstName,
            lastName,
            emailId,
            hours,
            project
        }

        console.log(employee)
    }

    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center mt-4'>Add employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label>First Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter first name'
                                    className='form-control' 
                                    name='firstName'
                                    value={firstName} 
                                    onChange={(e) => setFirstName(e.target.value)} 
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Last Name</label>
                                <input 
                                    type="text" 
                                    placeholder='Enter last name'
                                    className='form-control' 
                                    name='lastName'
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} 
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Email</label>
                                <input 
                                    type="email"
                                    placeholder='Enter email' 
                                    className='form-control' 
                                    name='emailId'
                                    value={emailId} 
                                    onChange={(e) => setEmailId(e.target.value)} 
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Hours worked</label>
                                <input 
                                    type="text"
                                    placeholder='Enter hours worked on a project' 
                                    className='form-control' 
                                    name='hours'
                                    value={hours} 
                                    onChange={(e) => setHours(e.target.value)} 
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Name of a project</label>
                                <input 
                                    type="text"
                                    placeholder='Enter name of a project' 
                                    className='form-control' 
                                    name='project'
                                    value={project} 
                                    onChange={(e) => setProject(e.target.value)} 
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveEmployee(e) }>Add Employee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee