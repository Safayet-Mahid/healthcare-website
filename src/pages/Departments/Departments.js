import React, { useEffect, useState } from 'react';
import DepartmentsInfo from '../DepartmentsInfo/DepartmentsInfo';
import './Departments.css'

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, []);
    return (
        <div>
            <h2 className='text-center my-3'>Our Departments</h2>
            <p className='text-center'>We have several enriched departments to ensure you a proper treatment.</p>
            {
                departments.map(department => <DepartmentsInfo
                    key={department.id}
                    department={department}

                >

                </DepartmentsInfo>)
            }
        </div>
    );
};

export default Departments;