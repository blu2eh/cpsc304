import React from "react";
import RefrigeratorTable from "./DeviceList";


function DeviceTest() {
    return (
        <div className="App">
            <h1>My Dynamic Table</h1>
            <RefrigeratorTable />  {/* Using the DynamicTable component */}
        </div>
    );
}

export default DeviceTest;