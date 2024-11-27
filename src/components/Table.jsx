import React from 'react'
import { getUsers } from '../store/userSlice';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';

export default function Table() {
    const users = useSelector((state) => state.user.users)
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.status) == 'loading';
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card p-4 rounded" style={{
                    maxWidth: '600px',
                    width: '100%',
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'  
                }}>
                    <h3 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#343a40' }}>User Information</h3>
                    <table className="table table-hover text-center" style={{ borderCollapse: 'separate', borderSpacing: '0 10px' }}>
                        <thead >
                            <tr >
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <h1>Loading</h1>
                            ) : (
                                users.map((e, i) => {
                                    return (
                                        <tr key={i} >
                                            <th scope="row" style={{ fontWeight: '600', color: '#007bff' }}>{e.username}</th>
                                            <td>{e.email}</td>
                                        </tr>
                                    );
                                }))}

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}
