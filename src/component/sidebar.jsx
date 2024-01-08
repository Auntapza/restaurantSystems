import React from "react"
import { Link } from "react-router-dom"
import './sidebar.css'

let Sidebar = () => {
    return (
        <>
            <aside>
                <h1>ResName - DashBord</h1>
                <ul className="asideLink">
                    <Link to={'/'}>
                        <li>HomePage</li>
                    </Link>
                    <Link to={'/analysis'}>
                        <li>Analysis</li>
                    </Link>
                    <Link to={'/userManage'}>
                        <li>User Management</li>
                    </Link>
                    <Link to={'/foodManage'}>
                        <li>Food Management</li>
                    </Link>
                </ul>

                <h1>พ่อมึงตาย</h1>

                <button className="logoutBtn">Logout</button>
            </aside>
        </>
    )
}

export default Sidebar