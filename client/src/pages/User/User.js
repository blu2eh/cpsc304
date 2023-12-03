import React, {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./User.css";
import { AuthContext } from "../../context/authContext";

export const User = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(inputs);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs)
            navigate("/home");
        } catch (err) {

            setError(err.response.data);

        }
    };

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };
    //
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };
    //
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:8080/login.php', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             body: new URLSearchParams({
    //                 username: email,
    //                 password: password
    //             })
    //         });
    //         const data = await response.json();
    //         if (data.success) {
    //             // Handle successful login here
    //         } else {
    //             // Handle login failure here
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };



    return (
        <div className="user">
            <div className="div">
                <img className="navigation-bar" alt="Navigation bar" src="/images/User/navigation-bar.svg" />
                <div className="overlap">
                    <img className="group" alt="Group" src="/images/User/group-43.svg" />
                    <img className="img" alt="Group" src="/images/User/group-42.svg" />
                    <div className="overlap-group-wrapper">
                        <Link to="/newuser">
                            <div className="overlap-group">
                                <div className="text-wrapper">Sign up</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="overlap-2">
                    <img className="group" alt="Group" src="/images/User/group-44.svg" />
                    <img className="img" alt="Group" src="/images/User/group-41.svg" />
                    <div className="overlap-group-wrapper">
                        <button className="buttonss" onClick={handleSubmit}>
                            <div className="overlap-group">
                                <div className="text-wrapper">Log in</div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="email-wrapper">
                    {/* Email input */}
                    <input
                        required="true"
                        className="email"
                        type="text"
                        name="email"
                        placeholder="Email"
                        // value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="password-wrapper">
                    {/* Password input */}
                    <input
                        required="true"
                        className="password"
                        type="text"
                        name="password"
                        placeholder="Password"
                        // value={password}
                        onChange={handleChange}
                    />
                </div>

                <button onClick={handleSubmit} style={{ border: 'none', background: 'none' }}>
                    <img className="log-into-your" alt="Log into your" src="/images/User/log-into-your-account.svg" />
                </button>
                <img className="new-with-us-click" alt="New with us click" src="/images/User/new-with-us-click.svg" />
            </div>
        </div>
    );
};

export default User;
