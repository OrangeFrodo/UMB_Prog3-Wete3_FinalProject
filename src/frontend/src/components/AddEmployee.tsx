import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const [hours, setHours] = useState("");
    const [project, setProject] = useState("");
    const [firm, setFirm] = useState("");
    const [pay, setPay] = useState("");

    const { id } = useParams();

    const saveOrUpdateEmployee = (e: any) => {
        e.preventDefault();
        // Employee object
        const employee = {
            firstName,
            lastName,
            emailId,
            hours,
            project,
            pay,
            employer: {
                name: firm
            }
        }

        if (id) {
            EmployeeServices.updateEmployee(id, employee)
                .then((res) => {
                    console.log(res)
                    // Redirect to home page
                    window.location.href = "/"
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            // Call employee services to save the employee
            EmployeeServices.createEmployee(employee)
                .then(response => {
                    console.log(response);
                    window.location.href = "/"
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }


    useEffect(() => {
        EmployeeServices.getEmployeeById(id)
            .then(response => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId);
                setHours(response.data.hours);
                setProject(response.data.project);
                setFirm(response.data.employer.name);
                setPay(response.data.pay);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const title = () => {
        if (id) {
            return <h1>Update Employee</h1>
        } else {
            return <h1>Add Employee</h1>
        }
    }

    const buttonText = () => {
        if (id) {
            return <button className="btn btn-primary" onClick={(e) => saveOrUpdateEmployee(e)}>Update</button>
        }
        else {
            return <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Add Employee</button>
        }
    }
    return (
        <div>
            <div className='container'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center mt-4'>{title()}</h2>
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
                            <div className='form-group mb-2'>
                                <label>Name of a firm</label>
                                <input
                                    type="text"
                                    placeholder='Enter name of a project'
                                    className='form-control'
                                    name='project'
                                    value={firm}
                                    onChange={(e) => setFirm(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label>Pay of an employee</label>
                                <input
                                    type="text"
                                    placeholder='Enter name of a project'
                                    className='form-control'
                                    name='project'
                                    value={pay}
                                    onChange={(e) => setPay(e.target.value)}
                                />
                            </div>
                            {buttonText()}
                            <Link to="/employee" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee