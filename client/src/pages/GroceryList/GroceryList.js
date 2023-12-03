import React from "react";
import { Link } from "react-router-dom";
import "./GroceryList.css";
import GroceryTable from "./GroceryListTable";

export const GroceryList = () => {
    const imagePrefix = "/images/GroceryList/";

    return (
        <div className="grocery-list">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src={imagePrefix + "rectangle44.svg"} />

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
                    <img className="img" alt="Rectangle" src={imagePrefix + "Rectangle3.svg"} />
                    <img className="rectangle-2" alt="Rectangle" src={imagePrefix + "Rectangle45.svg"} />
                    <img className="image" alt="Image" src={imagePrefix + "image8.svg"} />
                    <img className="grocerylisttext" alt="Grocerylisttext" src={imagePrefix + "grocerylisttext.svg"} />
                    <img className="fruit" alt="Fruit" src={imagePrefix + "fruit.svg"} />
                    <img className="vegi" alt="Vegi" src={imagePrefix + "vegi.svg"} />
                    <img className="carbs" alt="Carbs" src={imagePrefix + "carbs.svg"} />
                    <img className="meat" alt="Meat" src={imagePrefix + "meat.svg"} />
                    <img className="seafood" alt="Seafood" src={imagePrefix + "seafood.svg"} />
                    <div className={"FruitTable"}>
                        <GroceryTable/>
                    </div>

                    <div className={"VegetableTable"}>
                        <GroceryTable/>
                    </div>
                    <div className={"SeafoodTable"}>
                        <GroceryTable/>
                    </div>
                    <div className={"MeatTable"}>
                        <GroceryTable/>
                    </div>
                    <div className={"GrainTable"}>
                        <GroceryTable/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroceryList;
