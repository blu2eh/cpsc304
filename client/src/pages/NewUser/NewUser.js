import React, {useState} from "react";
import { Link, useNavigate} from "react-router-dom"; // Assuming you are using React Router
import axios from "axios";

import "./NewUser.css";

export const NewUser = () => {

    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [phone, setPhone] = useState("");
    //
    // const handleUsernameChange = (e) => {
    //     setUsername(e.target.value);
    // };
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };
    // const handlePhoneChange = (e) => {
    //     setPhone(e.target.value);
    // };
    // const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        phonenumber: "",
    });
    const [err, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(inputs)

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
            // console.log(2)
            navigate("/user");
        } catch (err) {
            console.log(1)
            setError(err.response.data);
        }
    };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:8080/register.php', { // Correct the endpoint
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             body: new URLSearchParams({
    //                 username: username,
    //                 password: password,
    //                 email: email,
    //                 phoneNum: phone
    //             })
    //         });
    //         const data = await response.json();
    //         if (data.success) {
    //             navigate('/user'); // Navigate to login page on successful registration
    //         } else {
    //             if (data.message === "User already exists") {
    //                 navigate('/user'); // Navigate to login page if user already exists
    //             } else {
    //                 navigate('/newuser'); // Stay on the registration page for other failures
    //             }
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    return (
        <div className="new-user">
            <div className="div">
                <img className="group" alt="Group" src="/images/NewUser/group37.svg" />
                <img className="navigation" alt="Navigation" src="/images/NewUser/navigation.svg" />
                <div className="overlap">
                    <img className="img" alt="Group" src="/images/NewUser/group39.svg" />
                    {/*The create account button*/}
                    <img
                        className="group-2"
                        alt="Group"
                        src="/images/NewUser/group51.svg"
                        onClick={handleSubmit}
                        style={{ cursor: 'pointer' }} // Optional, for visual feedback
                    />
                </div>
                <img className="group-3" alt="Group" src="/images/NewUser/group38.svg" />

                {/* Inputs */}

                <div className="overlap-group">
                    {/* Username input */}
                    <input
                        required
                        className="group-4"
                        type="username"
                        name="username"
                        placeholder="USERNAME"
                        // value={username}
                        onChange={handleChange}
                    />
                </div>
                <div className="overlap-2">
                    {/* Email input */}
                    <input
                        required
                        className="group-4"
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                        // value={email}
                        onChange={handleChange}
                    />
                </div>
                <div className="img-wrapper">
                    {/* Password input */}
                    <input
                        required
                        className="group-4"
                        type="password"
                        name="password"
                        placeholder="PASSWORD"
                        // value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="group-wrapper">
                    {/* Phone input */}
                    <input
                        required
                        className="group-4"
                        type="phonenumber"
                        placeholder="PHONENUMBER"
                        name="phonenumber"
                        // value={phone}
                        onChange={handleChange}
                    />
                </div>


                <img className="cake" alt="Cake" src="/images/NewUser/cake.svg" />
                <img className="donut" alt="Donut" src="/images/NewUser/donut.svg" />
                <img className="origini" alt="Origini" src="/images/NewUser/origini.svg" />
                <img className="icecream" alt="Icecream" src="/images/NewUser/icecream.svg" />
                <img className="bao" alt="bao" src="/images/NewUser/group36.svg" />
                <img className="welcome-message" alt="Welcome message" src="/images/NewUser/WelcomeMessage.svg" />
            </div>
        </div>
    );
};

export default NewUser;