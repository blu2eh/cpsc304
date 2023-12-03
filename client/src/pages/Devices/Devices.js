// Devices.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PantryOverlayAdd from "./PantryOverlay";
import RefrigeratorOverlayAdd from "./RefrigeratorOverlay";
import DynamicTable from "./htmlDynamicTableFunction";

import "./Devices.css";
import DynamicTable2 from "./htmlDynamicTableFunction2";

const Devices = () => {
    // State for managing the action
    const [action, setAction] = useState(null);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayVisible2, setOverlayVisible2] = useState(false);
    const [addedNickName, setAddedNickName] = useState(null);
    const [addedBrand, setAddedBrand] = useState(null);
    const [addedModel, setAddedModel] = useState(null);
    const [addedSerial, setAddedSerial] = useState(null);
    const [deletePantry, setDeletePantry] = useState(false);
    const [deleteRefrigerator, setDeleteRefrigerator] = useState(false);

    // Function to handle the click and update the state
    const handleAddPantry = (nickName) => {
        // Handle the logic to display the nickname or do anything else
        console.log(`Adding pantry with nickname: ${nickName}`);
        setAddedNickName(nickName);

    }
    const handleAddRefrigerator= (brand,model,serial) => {
        // Handle the logic to display the nickname or do anything else
        console.log(`Adding refrigerator with brand, model, serial: ${brand} ${model} ${serial} `);
        setAddedBrand(brand);
        setAddedModel(model);
        setAddedSerial(serial);
    }

    const handleClick = (actionType) => {
        setAction(actionType);
        console.log(`Performing action: ${actionType}`);

        if (actionType === 'ADD_PANTRY') {
            setOverlayVisible(true);
        }
        if (actionType === 'ADD_REFRIGERATOR') {
            setOverlayVisible2(true);
        }
        if (actionType === 'DELETE_PANTRY') {
            setDeletePantry(true)
        }
        if (actionType === 'DELETE_REFRIGERATOR') {
            setDeleteRefrigerator(true)
        }
    };
    const resetDeletePantry = () => {
        // Reset deletePantry after handling the action
        setDeletePantry(false);
    };

    useEffect(() => {
        if (deletePantry) {
            resetDeletePantry();
        }
    }, [deletePantry]);

    const resetDeleteRefrigerator = () => {
        setDeleteRefrigerator(false);
    };

    useEffect(() => {
        if (deleteRefrigerator) {
            resetDeleteRefrigerator();
        }
    }, [deleteRefrigerator]);


    // Function to close the overlays
    const closeOverlay = () => {
        setOverlayVisible(false);
    };
    const closeOverlay2 = () => {
        setOverlayVisible2(false);
    };


    return (
        <div className="devices">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">

                    {/* Adding and deleting devices */}
                    <img
                        className="delete-a-refrigerator"
                        alt="Delete a refrigerator"
                        src="/images/Devices/DeleteARefrigerator.svg"
                        onClick={() => handleClick('DELETE_REFRIGERATOR')}
                    />
                    <img
                        className="add-a-refrigerator"
                        alt="Add a refrigerator"
                        src="/images/Devices/AddARefrigerator.svg"
                        onClick={() => handleClick('ADD_REFRIGERATOR')}
                    />
                    <img
                        className="delete-a-pantry"
                        alt="Delete a pantry"
                        src="/images/Devices/DeleteAPantry.svg"
                        onClick={() => handleClick('DELETE_PANTRY')}
                    />
                    <img
                        className="add-a-pantry"
                        alt="Add a pantry"
                        src="/images/Devices/AddAPantry.svg"
                        onClick={() => handleClick('ADD_PANTRY')}
                    />

                    {overlayVisible && <PantryOverlayAdd onCancel={closeOverlay} onAddPantry={handleAddPantry} />}
                    {overlayVisible2 && <RefrigeratorOverlayAdd onCancel={closeOverlay2} onAddRefrigerator={handleAddRefrigerator} />}

                    <img className="rectangle" alt="Rectangle" src="/images/Devices/rectangle-44.svg" />
                    <img className="img" alt="Rectangle" src="/images/Devices/rectangle-3.svg" />
                    <img className="pantry" alt="Pantry" src="/images/Devices/pantry.svg" />
                    <img className="devicetext" alt="Devicetext" src="/images/Devices/devicetext.svg" />
                    <img className="freeze" alt="Freeze" src="/images/Devices/freeze.svg" />

                    {/* Tables */}
                    <div className="table-class">
                        <DynamicTable addedBrand={addedBrand} addedModel={addedModel} addedSerial={addedSerial} onDeleteRefrigerator={deleteRefrigerator}/>
                    </div>
                    <div className="table-class2">
                        <DynamicTable2 addedNickName={addedNickName} onDeletePantry={deletePantry}/>
                    </div>


                    {/* Toolbar */}
                    <Link to="/devices">
                        <img className="mydevices" alt="Mydevices" src="/images/Devices/mydevices.svg" />
                    </Link>
                    <Link to="/inventory">
                        <img className="myinventory" alt="Myinventory" src="/images/SmartMenu/myinventory.svg" />
                    </Link>
                    <Link to="/grocerylist">
                        <img className="mygrocerylist" alt="Mygrocerylist" src="/images/SmartMenu/mygrocerylist.svg" />
                    </Link>
                    <Link to="/smartmenu">
                        <img className="smartmenu" alt="Smartmenu" src="/images/SmartMenu/smartmenu.svg" />
                    </Link>
                    <Link to="/profile">
                        <img className="userbutton" alt="Userbutton" src="/images/SmartMenu/userbutton.svg" />
                    </Link>
                    <Link to="/home">
                        <img className="icon" alt="Icon" src="/images/Devices/Icon.svg" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Devices;
