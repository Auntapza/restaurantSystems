import { Link, Route, Routes } from "react-router-dom";
import Create from './userCreate'

let user = () => {
    return(
        <>
            <div className="User">
                <Link to={'/user/Create'}>
                    <button>Create User</button>
                </Link>

                
            </div>
        </>
    )
}

export default user