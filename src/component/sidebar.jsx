import React, { useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import './sidebar.css'
import menu from '../assets/menu.svg';
import pizza from '../assets/Pizza.svg';
import user from '../assets/User_light.svg';
import signOut from '../assets/Sign_out_squre.svg';
import chart from '../assets/Chart_light.svg';
import homeIcon from '../assets/Home_light.svg';

let urlPath = "";

for (let i = 0; i <= 4; i++) {
    urlPath += window.location.pathname[i]
}

console.log(urlPath);

let Sidebar = () => {

    let [active, setActive] = React.useState("home")
    let [position, setPosition] = React.useState(100)

    
    let setStyle = (path) => {
        switch (path) {
            case "/home":
                setPosition(100)
                setActive("home")
                break;
                case "/user":
                    setPosition(183)
                    setActive("user")
                    break;
            case "/menu":
                setPosition(264)
                setActive("menu")
                break;
            case "/summ":
                setPosition(345)
                setActive("summery")
                break;
            }
    }

    window.onload = () => {
        if (urlPath !== '/') {
            setStyle(`${urlPath}`)
        } else {
            setStyle('/home')
        }
    }

    return (
        <>
            <aside>
                <div className="higlight" style={{ top: position }}></div>
                <menu>
                    <div>
                        <img src={menu} alt="" />
                        <span>Menu</span>
                    </div>
                    <hr />
                </menu>
                <ul className="asideLink">
                    <Link to={'/'} onClick={() => { setStyle('/home') }}>
                        <li className={active == 'home' ? 'active' : ''}>
                            <img src={homeIcon} alt="" />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to={'/user'} onClick={() => { setStyle('/user') }}>
                        <li className={active == 'user' ? 'active' : ''}>
                            <img src={user} alt="" />
                            <span>Manage Uesr Info</span>
                        </li>
                    </Link>
                    <Link to={'/menu'} onClick={() => { setStyle('/menu') }}>
                        <li className={active == 'menu' ? 'active' : ''}>
                            <img src={pizza} alt="" />
                            <span>Menage Menu</span>
                        </li>
                    </Link>
                    <Link to={'/summ'} onClick={() => { setStyle('/summ') }}>
                        <li className={active == 'summery' ? 'active' : ''}>
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