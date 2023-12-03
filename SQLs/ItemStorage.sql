CREATE TABLE `ItemStorage`
(
    `ItemID`          INT,
    `DeviceID`        INT,
    `CompartmentName` VARCHAR(50) NOT NULL,
    `ExpiryDate`      DATE        NOT NULL,
    'Count'           INT,
    'InventoryID'     INT,
    PRIMARY KEY ('InventoryID'),
    FOREIGN KEY (`ItemID`) REFERENCES `FoodItem` (`ItemID`),
    FOREIGN KEY (`DeviceID`) REFERENCES `StorageDevice` (`DeviceID`),
    FOREIGN KEY (`CompartmentName`) REFERENCES `Temperature` (`CompartmentName`)
);

