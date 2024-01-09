import React from "react"
import { Link } from "react-router-dom"
import './sidebar.css'
import menu from '../assets/menu.svg';
import pizza from '../assets/Pizza.svg';
import user from '../assets/User_light.svg';
import signOut from '../assets/Sign_out_squre.svg';
import chart from '../assets/Chart_light.svg';
import homeIcon from '../assets/Home_light.svg';

let Sidebar = () => {
    return (
        <>
            <aside>
                <menu>
                    <div>
                        <img src={menu} alt="" />
                        <span>Menu</span>
                    </div>
                    <hr />
                </menu>
                <ul className="asideLink">
                    <Link to={'/'}>
                        <li>
                            <img src={homeIcon} alt="" />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li>
                            <img src={user} alt="" />
                            <span>Manage Uesr Info</span>
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li>
                            <img src={pizza} alt="" />
                            <span>Menage Menu</span>
                        </li>
                    </Link>
                    <Link to={'/'}>
                        <li>
                            <img src={chart} alt="" />
                            <span>Summery</span>
                        </li>
                    </Link>
                </ul>
                <button className="logoutBtn">
                    <img src={signOut} alt="" />
                    <span>Logout</span>
                </button>
            </aside>
        </>
    )
}

export default Sidebar