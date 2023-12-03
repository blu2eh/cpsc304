import React from "react";
import DynamicTable from "./htmlDynamicTableFunction";


function TableTest() {
    return (
        <div className="App">
            <h1>My Dynamic Table</h1>
            <DynamicTable />  {/* Using the DynamicTable component */}
        </div>
    );
}

export default TableTest;