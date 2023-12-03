import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";
import "./PantryOverlay.css";
import axios from "axios";

const PantryOverlayAdd = ({ onCancel, onAddPantry }) => {
    const [nickName, setNickName] = useState('');

    const handleNickNameChange = (e) => {
        setNickName(e.target.value);
    }

    const handleCancel = () => {
        // Call the onCancel function passed from the parent component
        onCancel();
    }

    const handleAddPantry = async (e) => {
        console.log(100)
        e.preventDefault();
        if (nickName) {
            try {
                console.log(nickName)
                console.log(1)
                const response = await axios.post('http://localhost:8800/api/pantry/', { nickname: nickName }, {withCredentials: true});
                console.log(response.data);  // Log the response from the server
                console.log(2)

                onAddPantry(nickName);
                setNickName('');
                onCancel();
            } catch (error) {
                console.error("Error adding pantry:", error.response ? error.response.data : error.message);
                alert('Failed to add pantry. Please try again.');
            }
        } else {
            alert('Please provide a nickname for your pantry.');
        }
    };


    return (
        <div className="pantry-overlay-ADD">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    {/*<img className="rectangle" alt="Rectangle" src="/images/PantryOverlayAdd/Rectangle44.svg" />*/}
                    <img className="img" alt="Rectangle" src="/images/PantryOverlayAdd/Rectangle3.svg" />
                    <div className={"search-bar"}>
                        <input
                            className={"nickName"}
                            type={"text"}
                            placeholder={"Give your pantry a good nickname!"}
                            value={nickName}
                            onChange={handleNickNameChange}
                        />
                    </div>
                    <img className="welcome-your-new" alt="Welcome your new" src="/images/PantryOverlayAdd/Welcomeyournewfamilyhelper!.svg" />
                    <img className="cancel" alt="Cancel" src="/images/PantryOverlayAdd/Cancel.svg" onClick={handleCancel} />

                    <img className="add-pantry" alt="Add pantry" src="/images/PantryOverlayAdd/AddPantry.svg" onClick={handleAddPantry} />

                </div>
            </div>
        </div>
    );
};

export default PantryOverlayAdd;
