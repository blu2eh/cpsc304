import React, {useState} from "react";
import { Link } from "react-router-dom";
// import { Cookies } from "./Cookies";
// import { Donuts } from "./Donuts";
// import { Fries } from "./Fries";
// import { Hotpot } from "./Hotpot";
// import { Pancake } from "./Pancake";
// import { Ramen } from "./Ramen";
// import { Sushi } from "./Sushi";
import "./Profile.css";
export const Profile = () => {
    const imagePrefix = "/images/Profile/";

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="profile">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src={imagePrefix +"rectangle44.svg"} />

                    <img className="img" alt="Rectangle" src={imagePrefix +"rectangle2.svg" }/>
                    <img className="welcometext" alt="Welcometext" src={imagePrefix +"welcometext.svg" }/>
                    <img className="USERNAME" alt="Username" src={imagePrefix +"USERNAME.svg"} />

                    <img className="searchbar" alt="Searchbar" src={imagePrefix +"searchbar.svg"} />
                    <img className="phonetext" alt="Phonetext" src={imagePrefix +"phonetext.svg"} />

                    <img className="searchbar-2" alt="Searchbar" src={imagePrefix +"searchbar.svg" }/>
                    <img className="emailtext" alt="Emailtext" src={imagePrefix +"emailtext.svg" }/>

                    <img className="usernametext" alt="Usernametext" src={imagePrefix +"usernametext.svg" }/>
                    <img className="searchbar-3" alt="Searchbar" src={imagePrefix +"searchbar.svg"} />

                    {/* Inputs */}

                    <div className="username-wrapper">
                        {/* Phone input */}
                        <input
                            className="USERNAME-2"
                            type="username"
                            placeholder="USERNAME"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>

                    <div className="phone-wrapper">
                        {/* Phone input */}
                        <input
                            className="PHONENUMBER"
                            type="phone"
                            placeholder="PHONENUMBER"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>

                    <div className="email-wrapper">
                        {/* Email input */}
                        <input
                            className="EMAILADDRESS"
                            type="email"
                            placeholder="EMAILADDRESS"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>

                    <Link to="/devices">
                        <img className="mydevices" alt="Mydevices" src={imagePrefix + "mydevices.svg"} />
                    </Link>
                    <Link to="/inventory">
                        <img className="myinventory" alt="Myinventory" src={imagePrefix + "myinventory.svg"} />
                    </Link>
                    <Link to="/grocerylist">
                        <img className="mygrocerylist" alt="Mygrocerylist" src={imagePrefix + "mygrocerylist.svg"} />
                    </Link>
                    <Link to="/smartmenu">
                        <img className="smartmenu" alt="Smartmenu" src={imagePrefix + "smartmenu.svg"} />
                    </Link>
                    <Link to="/profile">
                        <img className="userbutton" alt="Userbutton" src={imagePrefix + "userbutton.svg"} />
                    </Link>
                    <Link to="/home">
                        <img className="icon" alt="Icon" src="/images/Devices/Icon.svg" />
                    </Link>
                    <img className="hotpot-instance" src={imagePrefix +"hotpot.svg" } />
                    <img className="donuts-instance" src={imagePrefix +"donuts.svg" }  />
                    <img className="sushi-instance" src={imagePrefix +"sushi.svg" } />
                    <img className="ramen-instance" src={imagePrefix +"ramen.svg" } />
                    <img className="fries-instance" src={imagePrefix +"fries.svg" } />
                    <img className="pancake-instance" src={imagePrefix +"pancake.svg" } />
                    <img className="cookies-instance" src={imagePrefix +"cookies.svg" } />
                </div>
            </div>
        </div>
    );
};
export default Profile;