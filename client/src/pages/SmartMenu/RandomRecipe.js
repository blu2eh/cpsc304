import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RandomRecipe.css";

export const SmartMenu = () => {
    // Array of random recipes
    const recipes = [
        { title: "Spaghetti Carbonara", ingredients: "Pasta, Eggs, Bacon", instructions: "Cook pasta, fry bacon, mix with eggs and cheese." },
        { title: "Classic Margherita Pizza", ingredients: "Pizza dough, Tomato sauce, Mozzarella, Basil", instructions: "Top dough with sauce and cheese, bake until golden." },
        // Add more recipes as desired
    ];

    // State to hold the currently displayed recipe
    const [currentRecipe, setCurrentRecipe] = useState({});

    // Function to select a random recipe
    const selectRandomRecipe = () => {
        const randomIndex = Math.floor(Math.random() * recipes.length);
        return recipes[randomIndex];
    };

    // UseEffect to set a random recipe on component mount
    useEffect(() => {
        setCurrentRecipe(selectRandomRecipe());
    }, []);

    return (
        <div className="smart-menu">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    {/* ... other images and links ... /}
                    <img className="image" alt="Recipe Book" src="/images/SmartMenu/image4.svg" />

                    {/ Displaying the recipe text */}
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