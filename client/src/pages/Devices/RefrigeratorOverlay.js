import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RefrigeratorOverlay.css";

const RefrigeratorOverlayAdd = ({ onCancel, onAddRefrigerator }) => {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [serial, setSerial] = useState('');

    const handleBrandChange = (e) => {
        setBrand(e.target.value);
    }
    const handleModelChange = (e) => {
        setModel(e.target.value);
    }
    const handleSerialChange = (e) => {
        setSerial(e.target.value);
    }
    const handleCancel = () => {
        // Call the onCancel function passed from the parent component
        onCancel();
    }

    const handleAddRefrigerator = () => {
        // Call the onAddRefrigerator function passed from the parent component
        // You can also pass the nickname or any other data to the parent component here
        onAddRefrigerator(brand);
        if (brand && model && serial) {
            onAddRefrigerator(brand,model,serial);
            setBrand('');
            setModel('');
            setSerial('');
            onCancel();
        } else {
            alert('Please fill in all of the boxes!');
        }
    }

    return (
        <div className="refrigerator-overlay-ADD">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    {/*<img className="rectangle" alt="Rectangle" src="/images/RefrigeratorOverlayAdd/Rectangle44.svg" />*/}
                    <img className="img" alt="Rectangle" src="/images/RefrigeratorOverlayAdd/Rectangle3.svg" />
                    <div className={"search-bar"}>
                        <input
                            className={"brand"}
                            type={"text"}
                            placeholder={"Brand!"}
                            value={brand}
                            onChange={handleBrandChange}
                        />
                    </div>
                    <div className={"search-bar"}>
                        <input
                            className={"model"}
                            type={"text"}
                            placeholder={"Model#"}
                            value={model}
                            onChange={handleModelChange}
                        />
                    </div>
                    <div className={"search-bar-2"}>
                        <input
                            className={"serial"}
                            type={"text"}
                            placeholder={"Serial"}
                            value={serial}
                            onChange={handleSerialChange}
                        />
                    </div>
                    <img className="welcome-your-new" alt="Welcome your new" src="/images/RefrigeratorOverlayAdd/Welcome%20your%20new%20family%20helper!.svg" />
                    <img className="add-refrigerator" alt="Add refrigerator" src="/images/RefrigeratorOverlayAdd/AddIt.svg" onClick={handleAddRefrigerator} />
                    <img className="cancel" alt="Cancel" src="/images/RefrigeratorOverlayAdd/Cancel.svg" onClick={handleCancel} />
                </div>
            </div>
        </div>
    );
};

export default RefrigeratorOverlayAdd;
