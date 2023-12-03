import React, { useState, useEffect } from 'react';

function DynamicTable2({ addedNickName, onDeletePantry }) {
    const [tableData, setTableData] = useState([
        {id: 1, nickName: 'Josh the Tree Slayer', checked: false},
    ]);

    const [newRow, setNewRow] = useState({nickName: ''});

    useEffect(() => {
        // Update the newRow when addedNickName changes
        const newNickName = addedNickName || '';
        setNewRow({nickName: newNickName});

        // Use the updated newRow in the setTableData function
        const newId = Date.now();
        setTableData([...tableData, {id: newId, nickName: newNickName, checked: false}]);

        // Reset newRow if needed
        setNewRow({nickName: ''});

        console.log(`The nickName in function:  ${newNickName}`);
        console.log(`The new ID:  ${newId}`);
    }, [addedNickName]);


    function toggleCheckbox(id) {
        setTableData(
            tableData.map((row) => (row.id === id ? {...row, checked: !row.checked} : row))
        );
    }

    function handleInputChange(addedNickName) {
        const {value} = addedNickName.target;
        setNewRow({nickName: value});
    }

    function handleAddRow() {
        if (newRow.nickName) {
            const newId = Date.now();
            setTableData([...tableData, {id: newId, nickName: newRow.nickName, checked: false}]);
            setNewRow({nickName: ''});
        } else {
            alert('Please enter a nickname.');
        }
    }

    // Delete selected rows based on the onDeletePantry prop
    function deleteSelectedRows() {
        setTableData(tableData.filter((row) => !row.checked));
    }
    useEffect(() => {
        console.log('something was just deleted in pantry')
        deleteSelectedRows()
    }, [onDeletePantry])




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
                        <th style={styles.th}>Nickname</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((row) => (
                        <tr key={row.id}>
                            <td style={styles.td}>
                                <input
                                    type="checkbox"
                                    style={styles.checkbox}
                                    checked={row.checked || false} // Ensure we don't pass undefined
                                    onChange={() => toggleCheckbox(row.id)}
                                />
                            </td>
                            <td style={styles.td}>{row.nickName}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/*need to be migrated after test*/}
            {/*<button style={styles.button} onClick={deleteSelectedRows}>Delete Selected</button>*/}
            {/*<div>*/}
                {/*<input*/}
                {/*    type="text"*/}
                {/*    name="nickName"*/}
                {/*    style={styles.input}*/}
                {/*    value={newRow.nickName}*/}
                {/*    onChange={handleInputChange}*/}
                {/*    placeholder="Nickname"*/}
                {/*/>*/}
                {/*<button style={styles.addButton} onClick={handleAddRow}>Add Row</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default DynamicTable2;