import React from "react";
import "./Pantry.css";
import {Link} from "react-router-dom";
import FoodTable from "./FoodTable";
import PantryTable from "./DeviceList";
export const Pantry = () => {
    return (
        <div className="pantry">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src="/images/Pantry/rectangle-44.svg" />
                    <img className="img" alt="Rectangle" src="/images/Pantry/rectangle-3.svg" />
                    <Link to="/inventory">
                    <img className="deletearefrigerator" alt="Deletearefrigerator" src="/images/Pantry/deletearefrigerator.svg" />
                    </Link>
                    <img className="pantrytext" alt="Pantrytext" src="/images/Pantry/pantrytext.svg" />
                    <img className="image" alt="Image" src="/images/Pantry/image-3.svg" />
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
                    <div className={"pantryList"}>
                        <PantryTable/>
                    </div>
                    <div className={"pantryTable"}>
                        <FoodTable/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pantry;