CREATE TABLE `FoodItem` (
                            `ItemID` INT NOT NULL AUTO_INCREMENT,
                            `ItemName` VARCHAR(100) NOT NULL,
                            `FoodItemType` VARCHAR(50) NOT NULL,
                            `NutritionValue` VARCHAR(255),
                            PRIMARY KEY (`ItemID`),
                            UNIQUE INDEX `FOODITEM_ITEMNAME_UINDEX` (`ItemName`)
);



