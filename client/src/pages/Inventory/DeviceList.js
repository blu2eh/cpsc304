import React, { useState, useEffect } from 'react';
import "./htmlFoodDTableFunction.css";

function RefrigeratorTable() {
    // State to hold refrigerator data
    const [fridges, setFridges] = useState([
        { id: 1, brand: 'Brand 1', model: 'Model 1', serial: '123'},
        { id: 2, brand: 'Brand 2', model: 'Model 2', serial: '456'},
    ]);

    // State to track the selected refrigerator's data
    const [selectedFridge, setSelectedFridge] = useState(null);

    // This function could be used to send the selected fridge's data to the backend
    const sendSelectionToBackend = async (fridgeData) => {
        setSelectedFridge(fridgeData);
        // Placeholder for backend call
        // You would replace this with your actual backend call, for example using fetch or axios
        console.log('Sending data to backend:', fridgeData);
        // const response = await fetch('/api/endpoint', { method: 'POST', body: JSON.stringify(fridgeData), headers: { 'Content-Type': 'application/json' } });
        // const data = await response.json();
        // Handle response...
    };

    // Handle clicking a row to select a refrigerator
    const handleRowClick = (fridge) => {
        sendSelectionToBackend(fridge).then(r => 1);
    };

    const styles = {
        tableContainer: {
            display: 'flux',
            width: '550px', // Set the width of the table container
            maxHeight: '320px', // Set the maximum height of the table container
            overflow: 'scroll', // Add scrollbars if content overflows
            border: '1px solid #ddd', // Add border for better visibility
            backgroundColor: '#f4f4f4',
            // opacity: '0.7',

        },
        table: {
            // opacity: '0.3',
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            marginBottom: '20px',
        },
        th: {
            padding: '12px 5px',
            borderBottom: '1px solid #dddddd',
            // backgroundColor: '#f4f4f4',
            fontWeight: 'bold',
            fontSize: '10px',
            color: '#333',
        },
        td: {
            backgroundColor: '#f4f4f4',
            padding: '12px 0px',
            fontSize: '10px',

            borderBottom: '1px solid #dddddd',
            color: '#333',

        },
        selectedRow: { // Define selected row style
            backgroundColor: '#e0d4d4', // A darker shade for the selected row
            color: 'white', // Optional: Change text color for better contrast
        },

        inputbackground: {
            // backgroundColor: '#f4f4f4',
            width: '462px', // Set the width of the table container
            border: '1px solid #ddd', // Add border for better visibility

        },
        input: {
            width: '60px', // Set a specific width for the input boxes
            padding: '10px',
            // margin: '0px 10px 0px 80px',
            border: '1px solid #dddddd',
            borderRadius: '4px',
        },
        foodNameInput: {
            margin: '0px 5px 0px 80px', // Adjust the margin for FoodName input
        },

        foodTypeInput: {
            margin: '0px 5px 0px 5px', // Adjust the margin for FoodType input
        },

        nutritionValueInput: {
            margin: '0px 5px 0px 5px', // Adjust the margin for NutritionValue input
        },
        addRowContainer: {
            display: 'flex',
            justifyContent: 'flex-end', // Move buttons to the right
        },
        deleteRowContainer: {
            display: 'flex',
            justifyContent: 'flex-end', // Move buttons to the right
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end', // Move buttons to the right
        },
        button: {
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        deleteButton: {
            padding: '6px 12px',
            backgroundColor: '#ff4d4d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        addButton: {
            padding: '6px 12px',
            backgroundColor: '#5cb85c',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        checkbox: {
            margin: '0 5px',
            cursor: 'pointer',
        },
    };

    return (
        <div style={styles.tableContainer}>
            <table style={styles.table}>
                <thead>
                <tr>
                    <th style={styles.th}>Brand</th>
                    <th style={styles.th}>Model Number</th>
                    <th style={styles.th}>Serial Number</th>
                </tr>
                </thead>
                <tbody>
                {fridges.map((fridge) => {
                    // Determine the style for the current row based on selection
                    const rowStyle = fridge.id === selectedFridge ? styles.selectedRow : styles.td;
                    return (
                        <tr key={fridge.id} style={rowStyle} onClick={() => handleRowClick(fridge.id)}>
                            <td>{fridge.brand}</td>
                            <td>{fridge.model}</td>
                            <td>{fridge.serial}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}

export default RefrigeratorTable;