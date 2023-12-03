import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./StartMenu.css";
export const SmartMenu = () => {
    const recipes = [
        {
            title: "Spaghetti Carbonara",
            ingredients: "Pasta, Eggs, Bacon",
            instructions: "Cook pasta, fry bacon, mix with eggs and cheese."
        },
        {
            title: "Classic Margherita Pizza",
            ingredients: "Pizza dough, Tomato sauce, Mozzarella, Basil",
            instructions: "Top dough with sauce and cheese, bake until golden."
        },
        // Add more recipes as desired
    ], [currentRecipe, setCurrentRecipe] = useState({}), selectRandomRecipe = () => {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        return recipes[randomIndex];
    };


    useEffect(() => {
        setCurrentRecipe(selectRandomRecipe());
    }, []);

    return (
        <div className="smart-menu">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src="/images/SmartMenu/rectangle44.svg" />
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
                    <img className="img" alt="Rectangle" src="/images/SmartMenu/rectangle3.svg" />
                    <img className="img" alt="Rectangle" src="/images/SmartMenu/rectangle45.svg" />
                    <img className="image" alt="Image" src="/images/SmartMenu/image4.svg" />
                    <img className="recipetext" alt="Recipetext" src="/images/SmartMenu/recipetext.svg" />
                    <div className="recipe-content">
                        <h2>{currentRecipe.title}</h2>
                        <p><strong>Ingredients:</strong> {currentRecipe.ingredients}</p>
                        <p><strong>Instructions:</strong> {currentRecipe.instructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SmartMenu;

