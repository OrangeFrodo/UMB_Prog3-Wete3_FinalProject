import React, { useState } from 'react'

const ListEmployee = () => {
    // Use state to store the list of employees
    const [employees, setEmployees] = useState<any[]>([]);


    return (
        <div className='container'>
            <h1 className='text-center'>List of Employees</h1>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
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