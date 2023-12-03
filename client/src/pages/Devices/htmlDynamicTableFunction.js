import React, { useState, useEffect} from 'react';

function DynamicTable({ addedBrand, addedModel, addedSerial, onDeleteRefrigerator }) {
    const [tableData, setTableData] = useState([
        { id: 1, brand: 'Brand 1', model: 'Model 1', serial: '123', checked: false },
        { id: 2, brand: 'Brand 2', model: 'Model 2', serial: '456', checked: false },

    ]);

    const [newRow, setNewRow] = useState({ brand: '', model: '', serial: '' });

    useEffect(() => {
        // Update the newRow when addedNickName changes
        const newBrand = addedBrand || '';
        setNewRow({brand: newBrand});

        const newModel = addedModel || '';
        setNewRow({model: newModel});

        const newSerial = addedSerial || '';
        setNewRow({serial: newSerial});

        // Use the updated newRow in the setTableData function
        const newId = Date.now();
        setTableData([...tableData, {id: newId, brand: newBrand, model: newModel, serial: newSerial}]);

        // Reset newRow if needed
        setNewRow({brand: '', model: '', serial: ''});

        console.log(`The Brand in function:  ${newBrand}`);
        console.log(`The Model in function:  ${newModel}`);
        console.log(`The Serial in function:  ${newSerial}`);

        console.log(`The new ID:  ${newId}`);

    }, [addedBrand && addedSerial && addedModel]);

    function toggleCheckbox(id) {
        setTableData(
            tableData.map((row) => (row.id === id ? { ...row, checked: !row.checked } : row))
        );
    }

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setNewRow({ ...newRow, [name]: value });
    // }
    //
    // function handleAddRow() {
    //     if (newRow.brand && newRow.model && newRow.serial) {
    //         const newId = Date.now();
    //         setTableData([...tableData, { ...newRow, id: newId, checked: false }]);
    //         setNewRow({ brand: '', model: '', serial: '' });
    //     } else {
    //         alert('Please fill in all fields.');
    //     }
    // }

    // Delete selected rows based on the onDeleteRefrigerator prop
    function deleteSelectedRows() {
        setTableData(tableData.filter((row) => !row.checked));
    }
    useEffect(() => {
        console.log('something was just deleted in fridge')
        deleteSelectedRows()
    }, [onDeleteRefrigerator])



    const styles = {
        tableContainer: {
            width: '462px', // Set the width of the table container
            maxHeight: '320px', // Set the maximum height of the table container
            overflow: 'scroll', // Add scrollbars if content overflows
            border: '1px solid #ddd', // Add border for better visibility
            backgroundColor: '#f4f4f4',

        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            marginBottom: '20px',

        },
        th: {
            padding: '12px 15px',
            borderBottom: '1px solid #dddddd',
            backgroundColor: '#f4f4f4',
            fontWeight: 'bold',
            color: '#333',
        },
        td: {
            backgroundColor: '#f4f4f4',
            padding: '12px 15px',
            borderBottom: '1px solid #dddddd',
            color: '#333',

        },
        input: {
            padding: '10px',
            margin: '0 5px',
            border: '1px solid #dddddd',
            borderRadius: '4px',
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
            padding: '10px 20px',
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
        <div>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <th style={styles.th}>Select</th>
                        <th style={styles.th}>Brand</th>
                        <th style={styles.th}>Model Number</th>
                        <th style={styles.th}>Serial Number</th>
                    </tr>
                    </thead>
                    <tbody>
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
                            <td style={styles.td}>{row.brand}</td>
                            <td style={styles.td}>{row.model}</td>
                            <td style={styles.td}>{row.serial}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DynamicTable;

