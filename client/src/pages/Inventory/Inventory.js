import React from "react";
import { Link } from "react-router-dom";
import "./Inventory.css";
import FoodTable from "./htmlFoodDTableFunction";
import FoodTable2 from "./htmlFoodDTableFunction2";
import RefrigeratorTable from "./DeviceList";

export const Refrigerator = () => {

    return (
        <div className="refrigerator">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <img className="rectangle" alt="Rectangle" src="/images/Inventory/rectangle-44.svg" />
                        <img className="fridge"  alt="Fridge" src="/images/Inventory/fridge.svg" />
                        <img className="freezer" alt="Freezer" src="/images/Inventory/freezer.svg" />
                        <img className="refrigeratortext"  alt="Refrigeratortext" src="/images/Inventory/refrigeratortext.svg" />
                        <div className= "deviceList">
                            <RefrigeratorTable/>
                        </div>

                        {/*Tables*/}
                        <div className="fridgeTable" >
                            <FoodTable/>
                        </div>
                        <div className="fridgeTable2" >
                            <FoodTable2/>
                        </div>
                        <div className={"deviceList"}>
                            <RefrigeratorTable/>
                        </div>

                        <Link to="/devices">
                            <img className="mydevices" alt="Mydevices" src="/images/SmartMenu/mydevices.svg" />
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

                        <img className="image" alt="Image" src="/images/Inventory/image-1.svg" />

                    </div>
                    <Link to="/pantry">
                    <div className="topantry-wrapper">
                        <img className="topantry" alt="Topantry" src="/images/Inventory/topantry.svg" />
                    </div>
                    </Link>

                </div>

            </div>
        </div>
    );
};
export default Refrigerator;