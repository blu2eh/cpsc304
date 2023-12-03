import React from "react";
import FoodTable from "./htmlFoodDTableFunction";


function TableTest() {
    return (
        <div className="App">
            <h1>My Dynamic Table</h1>
            <FoodTable />  {/* Using the DynamicTable component */}
        </div>
    );
}

export default TableTest;