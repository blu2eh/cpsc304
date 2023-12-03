import React, { useState } from 'react';
function FoodTable() {
    console.log('Refrigerator is rendering');
    // const [tableData, setTableData] = useState([
    //     {id: 1, foodName: 'SoySauce', foodType: 'Sauce', nutrition:'5 calories', checked: false}
    // ])
    // Create an array of 15 items using `Array.from`
    const initialTableData = Array.from({ length: 35 }, (_, index) => ({
        id: index + 1,
        foodName: `Food ${index + 1}`,
        foodType: `Type ${index + 1}`,
        nutrition: `${5 * (index + 1)} calories`,
        checked: false
    }));

    const [tableData, setTableData] = useState(initialTableData);
    const[newRow, setNewRow] = useState({foodName: '', foodType: '', nutritionValue: ''});

    function toggleCheckbox(id) {
        setTableData(
            tableData.map((row) => (row.id === id ? {...row, checked: !row.checked} : row))
        );
    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        setNewRow({...newRow, [name]: value});
    }

    function handleAddRow() {
        const {foodName, foodType, nutritionValue} = newRow;
        if (foodName && foodType && nutritionValue) {
            const newId = Date.now();
            setTableData([...tableData, {...newRow, id: newId}]);
            setNewRow({foodName: '', foodType: '', nutritionValue: ''});
        } else {
            alert('Please fill in all fields.');
        }
    }

    //Comment deleteSelectedRows function after test
    function deleteSelectedRows() {
        setTableData(tableData.filter((row) => !row.checked));
    }

    const styles = {
        tableContainer: {
            display: 'flux',
            width: '350px', // Set the width of the table container
            maxHeight: '750px', // Set the maximum height of the table container
            overflow: 'scroll', // Add scrollbars if content overflows
            // border: '1px solid #ddd', // Add border for better visibility
            backgroundColor: '#f4f4f4',
            // opacity: '0.7',

        },
        thead: {
            display: 'block',
        },
        tbody: {
            display: 'block',
            height: '380px', // Adjust to fit your design
            overflow: 'auto',
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
            position: 'sticky',
            top: 0,
            backgroundColor: '#f4f4f4',
        },
        td: {
            backgroundColor: '#f4f4f4',
            padding: '12px 0px',
            fontSize: '10px',
            borderBottom: '1px solid #dddddd',
            color: '#333',

        },
        filler: {
            backgroundColor: "blue",
            width: "50px",
            height: "100px",

        },
        inputbackground: {
            // backgroundColor: '#f4f4f4',
            width: '462px', // Set the width of the table container
            // border: '1px solid #ddd', // Add border for better visibility

        },
        input: {
            width: '50px', // Set a specific width for the input boxes
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
            justifyContent: 'center', // Move buttons to the right
            alignItems: 'center', // Center the content vertically
            flexDirection: 'row',
            padding: '10px 0', // Add some vertical padding
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
        <div style={styles.d}>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead className="thead">
                    <tr>
                        <th style={styles.th}>Select</th>
                        <th style={styles.th}>Food<br/>Name</th>
                        <th style={styles.th}>Food<br/>Type</th>
                        <th style={styles.th}>Nutrition<br/>Value</th>
                    </tr>
                    </thead>
                    <tbody className="tbody">
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td style={styles.td}>
                                <input
                                    type="checkbox"
                                    style={styles.checkbox}
                                    checked={row.checked}
                                    onChange={() => toggleCheckbox(row.id)}
                                />
                            </td>
                            <td style={styles.td}>{row.foodName}</td>
                            <td style={styles.td}>{row.foodType}</td>
                            <td style={styles.td}>{row.nutritionValue}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
            <div style={styles.inputbackground}>
                <input
                    type="text"
                    name="foodName"
                    style={{ ...styles.input, ...styles.foodNameInput }}
                    value={newRow.foodName}
                    onChange={handleInputChange}
                    placeholder="Enter"
                />
                <input
                    type="text"
                    name="foodType"
                    style={{ ...styles.input, ...styles.foodTypeInput }}
                    value={newRow.foodType}
                    onChange={handleInputChange}
                    placeholder="Enter"
                />
                <input
                    type="text"
                    name="nutritionValue"
                    style={{ ...styles.input, ...styles.nutritionValueInput }}
                    value={newRow.nutritionValue}
                    onChange={handleInputChange}
                    placeholder="Enter"
                />
            </div>
            <div style={styles.buttonContainer}>
                <div className='addbutton' style={styles.addRowContainer}>
                    <button style={{ ...styles.button, ...styles.addButton }} onClick={handleAddRow}>
                        Add Row
                    </button>
                </div>
                <div className='deletebutton' style={styles.deleteRowContainer}>
                    <button style={{ ...styles.button, ...styles.deleteButton }} onClick={deleteSelectedRows}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FoodTable;