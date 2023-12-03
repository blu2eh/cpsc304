import React, { useState, useEffect } from 'react';

function GroceryTable() {
    const initialItems = [];

    for (let i = 1; i <= 15; i++) {
        initialItems.push({ name: `Item ${i}` });
    }

    const [items, setItems] = useState(initialItems);

    const styles = {
        // tableContainer: {
        //     display: 'flux',
        //     width: '550px', // Set the width of the table container
        //     maxHeight: '1000px', // Set the maximum height of the table container
        //     overflow: 'scroll', // Add scrollbars if content overflows
        //     border: '1px solid #ddd', // Add border for better visibility
        //     backgroundColor: '#f4f4f4',
        //     // opacity: '0.7',
        //
        // },
        nameTitle: {
            // border: '1px solid #ddd', // Add border for better visibility
            color: 'Blue',
        },

        gbackground: {
            backgroundColor: 'transparent',
            overflow: 'scroll', // Add scrollbars if content overflows
            height: '190px', // Set the maximum height of the table container
            width: '100px',
            border: '5px solid #ddd', // Add border for better visibility
            borderRadius: '10%',
        },

        gtable: {

            padding: '10px 20px',
            boxSizing: 'border-box', // Include padding and border in the element's total width and height
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
        <div className="grocery-list" style={styles.gbackground}>
            {/* Static table for displaying items */}

            <div className="grocery-table" style={styles.gtable}>
                <table style={styles.table}>
                    <thead>
                    <tr style={styles.nameTitle}>
                        <th>Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr key={item.name}>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default GroceryTable;