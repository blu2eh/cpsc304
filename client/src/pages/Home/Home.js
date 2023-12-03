import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="div">
                <div className="overlap">
                    <img className="vector" alt="Vector" src="/images/Home/vector-1.svg" />
                    <img className="img" alt="Vector" src="/images/Home/vector-2.svg" />
                    <img className="img" alt="Vector stroke" src="/images/Home/vector-2-stroke.svg" />
                    <img className="rectangle" alt="Rectangle" src="/images/Home/rectangle-40.svg" />
                    <img className="ellipse" alt="Ellipse" src="/images/Home/ellipse-11.svg" />
                    <img className="mexican-cuisine" alt="Mexican cuisine" src="/images/Home/mexican-cuisine.svg" />
                    <img className="ellipse-2" alt="Ellipse" src="/images/Home/ellipse-9.svg" />
                </div>
                <div className="overlap-group">
                    <div className="overlap-group-2">
                        <img className="img-2" alt="Ellipse" src="/images/Home/ellipse-1.svg" />


                        <img className="welcome-back" alt="Welcome back" src="/images/Home/welcome-back.svg" />
                        <img className="what-can-we-help" alt="What can we help" src="/images/Home/what-can-we-help-with-you-today.svg" />
                        <img className="img-2" alt="Hover circle" src="/images/Home/hover-circle.svg" />

                        <Link to="/inventory">
                        <img className="group" alt="Group" src="/images/Home/group-49.svg" />
                        </Link>

                        <Link to="/smartmenu">
                        <img className="group-2" alt="Group" src="/images/Home/group-53.svg" />
                        </Link>

                        <img className="image" alt="Image" src="/images/Home/image-4.svg" />

                    </div>

                    <img className="icon" alt="Icon" src="/images/Home/icon.svg" />

                    <Link to="/">
                        <img className="foodie" alt="Foodie" src="/images/Home/foodie.svg" />
                    </Link>

                    <Link to="/devices">
                        <img className="my-devices" alt="My devices" src="/images/Home/my-devices.svg" />
                    </Link>
                    <Link to="/inventory">
                        <img className="my-inventory" alt="My inventory" src="/images/Home/my-inventory.svg" />
                    </Link>
                    <Link to="/grocerylist">
                        <img className="my-grocery-list" alt="My grocery list" src="/images/Home/my-grocery-list.svg" />
                    </Link>
                    <Link to="/smartmenu">
                        <img className="smart-menu" alt="Smart menu" src="/images/Home/smart-menu.svg" />
                    </Link>
                    <Link to="/profile">
                        <img className="user-button" alt="User button" src="/images/Home/user-button.svg"/>
                    </Link>
                </div>

                <Link to="/devices">
                <img className="group-3" alt="Group" src="/images/Home/group-51.svg" />
                </Link>

                <Link to="/smartmenu">
                <img className="group-4" alt="Group" src="/images/Home/group-52.svg" />
                </Link>

                    {/*<img className="rectangle-39" alt="Rectangle" src="/images/Home/rectangle-39.svg" />*/}
                <img className="ellipse-3" alt="Ellipse" src="/images/Home/ellipse-8.svg" />
            </div>
        </div>
    );
};

export default Home;
