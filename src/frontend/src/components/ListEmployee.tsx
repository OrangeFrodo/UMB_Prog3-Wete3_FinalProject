import React, { useEffect, useState } from 'react'
import EmployeeServices from '../services/EmployeeServices';
import { Link } from "react-router-dom"

const ListEmployee = () => {
    // Use state to store the list of employees
    const [employees, setEmployees] = useState<any[]>([]);

    useEffect(() => {
        getAllEmployees()
    }, [])

    const getAllEmployees = () => {
        EmployeeServices.getAllEmployees().then(response => {
            setEmployees(response.data);
            console.log(response.data);
        })
    }

    const deleteEmployee = (id: any) => {
        EmployeeServices.deleteEmployee(id)
            .then((res) => {
                getAllEmployees()
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>List of Employees</h1>
            <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Employee Hours</th>
                        <th>Employee Project</th>
                        <th>Employer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee => {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>{employee.hours}</td>
                                    <td>{employee.project}</td>
                                    <td>{employee.employer.name}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                        <Link style={{margin: 5}} className='btn btn-danger' to={"/"} onClick={() => deleteEmployee(employee.id)}>Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee