// Import necessary dependencies
import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css";

// WelcomePage component
const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <div className="div">
                <div className="overlap">
                    <img className="vector" alt="Vector" src="/images/WelcomePage/vector-1.svg" />
                    <img className="img" alt="Vector" src="/images/WelcomePage/vector-2.svg" />
                    <img className="img" alt="Vector stroke" src="/images/WelcomePage/vector-2-stroke.svg" />
                    <img className="rectangle" alt="Rectangle" src="/images/WelcomePage/rectangle-40.svg" />
                    <img className="ellipse" alt="Ellipse" src="/images/WelcomePage/ellipse-11.svg" />
                    <img
                        className="south-indian-cuisine"
                        alt="South Indian cuisine"
                        src="/images/WelcomePage/south-indian-cuisine.svg"
                    />
                    <img className="ellipse-2" alt="Ellipse" src="/images/WelcomePage/ellipse-9.svg" />
                </div>
                <div className="overlap-group">
                    <div className="overlap-2">
                        <img className="img-2" alt="Ellipse" src="/images/WelcomePage/ellipse-1.svg" />
                        <img
                            className="our-project-is-the"
                            alt="Our project is the"
                            src="/images/WelcomePage/description.svg"
                        />
                        <img className="img-2" alt="Hover circle" src="/images/WelcomePage/hover-circle.svg" />
                        <img className="salad" alt="Salad" src="/images/WelcomePage/salad.svg" />
                        <img className="south-indian" alt="South Indian" src="/images/WelcomePage/south-indian.svg" />
                    </div>
                    <img className="foodie" alt="Foodie" src="/images/WelcomePage/foodie.svg" />
                    <img className="navigation-bar" alt="Navigation bar" src="/images/WelcomePage/navigation-bar.svg" />
                </div>
                <div className="enter-now-button">
                    <div className="enter-now-wrapper">
                        {/* Use the Link component to create a clickable link */}
                        <Link to="/user">
                            <img className="enter-now" alt="Enter now" src="/images/WelcomePage/enter-now.svg" />
                        </Link>
                    </div>
                </div>
                <img className="rectangle-2" alt="Rectangle" src="/images/WelcomePage/rectangle-43.svg" />
            </div>
        </div>
    );
};

export default WelcomePage;
