import React from 'react'
import { useSelector } from 'react-redux'

export default function Stats() {
    const users = useSelector((state) => state.user.users).length;
    return (
        <>
            <h2>Users Count</h2>
            <h4>
                {users}
            </h4>
        </>
    )
}
