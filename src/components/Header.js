import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header =()=> {
    const [loginBtn, setLoginBtn]= useState("Login")
    return (
        <div className="header">
            <div className="brand-logo">
                <img className="logo-img" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=> {
                    loginBtn==="Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                }}>{loginBtn}</button>
            </div>
        </div>
    )
};
export default Header;

 // Using Inline arrow function ->
//  <button className="login-btn" onClick={()=> {
//                     loginBtn==="Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
//                 }}>{loginBtn}</button>


// Using Seperate function ->

// const Header = () => {
//     const [loginBtn, setLoginBtn] = useState("Login");

//     const handleLoginToggle = () => {
//         if (loginBtn === "Login") {
//             setLoginBtn("Logout");
//         } else {
//             setLoginBtn("Login");
//         }
//     };

// <button className="login-btn" onClick={handleLoginBtn}>{loginBtn}</button>