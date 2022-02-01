import React, { useEffect } from "react";
import Link from "./Link";
import { useNavigate } from "react-router-dom";



const Header = () => {

    const navigate = useNavigate();

    const navigateHandler = () => {
        localStorage.removeItem("currentUser");
        navigate('/')
    }

   

    const isUserLogin = localStorage.getItem("currentUser");


    return (
        <div className="ui secondary pointing menu">
            {isUserLogin ? <Link href="/" className="item">
                <button onClick={navigateHandler}>Logout</button>
            </Link> : <Link href="/" className="item">
                LoginPage
            </Link>}
            <Link href="/createBlog" className="item">
                CreateBlog
            </Link>
            {/* <Link href="/detailPage" className="item">
                BlogDetailPage
            </Link> */}
        </div>
    );
}


export default Header;