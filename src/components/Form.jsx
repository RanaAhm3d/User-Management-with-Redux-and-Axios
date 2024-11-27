import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, changeValueUserName, changeValueEmail } from '../store/userSlice'

export default function Form() {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.username);
    const email = useSelector((state) => state.user.email);
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100" style={{
                backgroundImage: "url('https://th.bing.com/th/id/R.72c6b9aac6a6509660536e7c2b05322c?rik=xnFW1Kaz0J1zzA&pid=ImgRaw&r=0')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '20px',
            }}>
                <div className="card p-4" style={{ maxWidth: '400px', width: '100%', backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '15px' }}>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        dispatch(addUser({ username, email }));
                    }}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => dispatch(changeValueUserName(e.target.value))}
                                placeholder="Enter your username"
                                required
                            />
                            <label htmlFor="username">User Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="emailAddress"
                                value={email}
                                onChange={(e) => dispatch(changeValueEmail(e.target.value))}
                                placeholder="Enter your email"
                                required
                            />
                            <label htmlFor="emailAddress">Email Address</label>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
