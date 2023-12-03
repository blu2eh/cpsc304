-- drop the existing tables
drop table Administrates;

drop table BasedOn;

drop table Contains;

drop table Duration;

drop table InventoryLog;

drop table ItemStorage;

drop table FoodItem;

drop table MealSuggestion;

drop table Obtains;

drop table GroceryList;

drop table Owns;

drop table Pantry;

drop table Receives;

drop table Notifications;

drop table Refrigerator;

drop table StorageDevice;

drop table Temperature;

drop table User;

-- Create Tables
CREATE TABLE `FoodItem`
(
    `ItemID`         INT          NOT NULL AUTO_INCREMENT,
    `ItemName`       VARCHAR(100) NOT NULL,
    `FoodItemType`   VARCHAR(50)  NOT NULL,
    `NutritionValue` VARCHAR(255),
    PRIMARY KEY (`ItemID`),
    UNIQUE INDEX `FOODITEM_ITEMNAME_UINDEX` (`ItemName`)
);

CREATE TABLE `User`
(
    `USERID`      INT          NOT NULL AUTO_INCREMENT,
    `USERNAME`    VARCHAR(100) NOT NULL,
    `PHONENUMBER` BIGINT       NOT NULL,
    `EMAIL`       VARCHAR(100) NOT NULL,
    `PASSWORD`    VARCHAR(255) NOT NULL,
    PRIMARY KEY (`USERID`),
    UNIQUE (`USERNAME`),
    UNIQUE (`PHONENUMBER`),
    UNIQUE (`EMAIL`)
);

CREATE TABLE `StorageDevice`
(
    `DeviceID` INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`DeviceID`)
);

CREATE TABLE `Refrigerator`
(
    `DeviceID` INT NOT NULL,
    `Serial#`  VARCHAR(255),
    `Brand`    VARCHAR(100),
    `Model#`   INT,
    PRIMARY KEY (`DeviceID`),
    FOREIGN KEY (`DeviceID`) REFERENCES `StorageDevice` (`DeviceID`),
    UNIQUE INDEX `REFRIGERATOR_MODEL#_UINDEX` (`Model#`),
    UNIQUE INDEX `REFRIGERATOR_SERIAL#_UINDEX` (`Serial#`)
);

CREATE TABLE `Pantry`
(
    `DeviceID`   INT NOT NULL,
    `PantryName` VARCHAR(100),
    PRIMARY KEY (`DeviceID`),
    FOREIGN KEY (`DeviceID`) REFERENCES `StorageDevice` (`DeviceID`),
    UNIQUE INDEX `PANTRY_PANTRYNAME_UINDEX` (`PantryName`)
);

CREATE TABLE `Temperature`
(
    `CompartmentName` VARCHAR(50) NOT NULL,
    `Temperature`     FLOAT       NOT NULL,
    PRIMARY KEY (`CompartmentName`)
);

CREATE TABLE `Owns`
(
    `DeviceID` INT NOT NULL,
    `UserID`   INT NOT NULL,
    PRIMARY KEY (`UserID`, `DeviceID`),
    FOREIGN KEY (`DeviceID`) REFERENCES `StorageDevice` (`DeviceID`),
    FOREIGN KEY (`UserID`) REFERENCES `User` (`USERID`)
);

-- Continuing with the rest of the table creation in a similar format.
CREATE TABLE `GroceryList`
(
    `GroceryListDate` DATE,
    `GroceryList#`    INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (`GroceryList#`)
);

CREATE TABLE `Obtains`
(
    `UserID`       INT NOT NULL,
    `GroceryList#` INT NOT NULL,
    PRIMARY KEY (`UserID`, `GroceryList#`),
    FOREIGN KEY (`UserID`) REFERENCES `User` (`USERID`),
    FOREIGN KEY (`GroceryList#`) REFERENCES `GroceryList` (`GroceryList#`)
);

CREATE TABLE `InventoryLog`
(
    `LogEntryID` INT NOT NULL AUTO_INCREMENT,
    `LogTimeVal` BIGINT,
    `ItemCount`  INT,
    `ItemID`     INT,
    PRIMARY KEY (`LogEntryID`),
    FOREIGN KEY (`ItemID`) REFERENCES `FoodItem` (`ItemID`)
);

CREATE TABLE `Administrates`
(
    `UserID`     INT NOT NULL,
    `LogEntryID` INT NOT NULL,
    PRIMARY KEY (`UserID`, `LogEntryID`),
    FOREIGN KEY (`UserID`) REFERENCES `User` (`USERID`),
    FOREIGN KEY (`LogEntryID`) REFERENCES `InventoryLog` (`LogEntryID`)
);

CREATE TABLE `Duration`
(
    `ItemID`          INT         NOT NULL,
    `CompartmentName` VARCHAR(50) NOT NULL,
    `DurationInDays`  INT         NOT NULL,
    PRIMARY KEY (`ItemID`, `CompartmentName`),
    FOREIGN KEY (`ItemID`) REFERENCES `FoodItem` (`ItemID`),
    FOREIGN KEY (`CompartmentName`) REFERENCES `Temperature` (`CompartmentName`)
);

CREATE TABLE `Notifications`
(
    `NOTIFICATIONID`    INT          NOT NULL AUTO_INCREMENT,
    `MESSAGEBODY`       VARCHAR(100) NOT NULL,
    `NOTIFICATIONCOUNT` INT,
    PRIMARY KEY (`NOTIFICATIONID`)
);

CREATE TABLE `Receives`
(
    `UserID`         INT NOT NULL,
    `NotificationID` INT NOT NULL,
    PRIMARY KEY (`UserID`, `NotificationID`),
    FOREIGN KEY (`UserID`) REFERENCES `User` (`USERID`),
    FOREIGN KEY (`NotificationID`) REFERENCES `Notifications` (`NOTIFICATIONID`)
);

CREATE TABLE `MealSuggestion`
(
    `MealID`  INT NOT NULL AUTO_INCREMENT,
    `Recipes` VARCHAR(300),
    PRIMARY KEY (`MealID`)
);

CREATE TABLE `BasedOn`
(
    `LogEntryID` INT NOT NULL,
    `MealID`     INT,
    PRIMARY KEY (`LogEntryID`),
    FOREIGN KEY (`LogEntryID`) REFERENCES `InventoryLog` (`LogEntryID`),
    FOREIGN KEY (`MealID`) REFERENCES `MealSuggestion` (`MealID`)
);

CREATE TABLE `ItemStorage`
(
    `ItemID`          INT,
    `DeviceID`        INT,
    `CompartmentName` VARCHAR(50) NOT NULL,
    `ExpiryDate`      DATE        NOT NULL,
    'Count'           INT,
    'InventoryID'     INT         AUTO_INCREMENT,
    PRIMARY KEY ('InventoryID'),
    FOREIGN KEY (`ItemID`) REFERENCES `FoodItem` (`ItemID`),
    FOREIGN KEY (`DeviceID`) REFERENCES `StorageDevice` (`DeviceID`),
    FOREIGN KEY (`CompartmentName`) REFERENCES `Temperature` (`CompartmentName`)
);

CREATE TABLE `Contains`
(
    `ItemID`       INT NOT NULL,
    `GroceryList#` INT NOT NULL,
    `InventoryID`   INT NOT NULL,
    PRIMARY KEY (`ItemID`, `GroceryList#`),
    FOREIGN KEY (`ItemID`) REFERENCES `FoodItem` (`ItemID`),
    FOREIGN KEY (`GroceryList#`) REFERENCES `GroceryList` (`GroceryList#`),
    FOREIGN KEY (`LogEntryID`) REFERENCES `ItemStorage` (`InventoryID`)
);



-- Insert values

-- FoodItem
INSERT INTO `FoodItem` (`ItemName`, `FoodItemType`, `NutritionValue`)
VALUES ('Apple', 'Fruit', 'Vitamin C, Fiber'),
       ('Banana', 'Fruit', 'Potassium, Vitamin B6'),
       ('Carrot', 'Vegetable', 'Vitamin A, Fiber'),
       ('Salmon', 'Seafood', 'Omega-3 Fatty Acids, Protein');

-- Insert statements for 'User' table, include a 'PASSWORD' column:
INSERT INTO `User` (`USERNAME`, `PHONENUMBER`, `EMAIL`, `PASSWORD`)
VALUES ('JohnDoe', 1234567890, 'john.doe@example.com', 'password123'),
       ('JaneDoe', 9876543210, 'jane.doe@example.com', 'password456'),
       ('MikeSmith', 5551234567, 'mike.smith@example.com', 'password789'),
       ('EmilyJohnson', 9998765432, 'emily.johnson@example.com', 'password012');

-- StorageDevice
INSERT INTO `StorageDevice` (`DeviceID`)
VALUES (1),
       (2),
       (3),
       (4),
       (5),
       (6),
       (7),
       (8);

-- Refrigerator
INSERT INTO `Refrigerator` (`DeviceID`, `Serial#`, `Brand`, `Model#`)
VALUES (1, 'ABC123', 'Samsung', 12345),
       (2, 'XYZ789', 'LG', 54321),
       (3, 'JKL456', 'Whirlpool', 67890),
       (4, 'MNO789', 'GE', 45678);

-- Pantry
INSERT INTO `Pantry` (`DeviceID`, `PantryName`)
VALUES (5, 'KitchenPantry'),
       (6, 'BasementPantry'),
       (7, 'ClosetPantry'),
       (8, 'GaragePantry');

-- Temperature
INSERT INTO `Temperature` (`CompartmentName`, `Temperature`)
VALUES ('MainCompartment', 4.0),
       ('Freezer', -18.0),
       ('VegetableDrawer', 8.0),
       ('MeatDrawer', 2.0);

-- Owns
INSERT INTO `Owns` (`UserID`, `DeviceID`)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4);

-- GroceryList
INSERT INTO `GroceryList` (`GroceryListDate`, `GroceryList#`)
VALUES ('2023-11-21', 1),
       ('2023-11-22', 2),
       ('2023-11-23', 3),
       ('2023-11-24', 4);

-- Obtains
INSERT INTO `Obtains` (`UserID`, `GroceryList#`)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4);

-- InventoryLog
INSERT INTO `InventoryLog` (`LogTimeVal`, `ItemCount`, `ItemID`)
VALUES (1637500000, 5, 1),
       (1637580000, 3, 2),
       (1637650000, 10, 3),
       (1637720000, 3, 4);

-- Administrates
INSERT INTO `Administrates` (`UserID`, `LogEntryID`)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4);

-- Duration
INSERT INTO `Duration` (`ItemID`, `CompartmentName`, `DurationInDays`)
VALUES (1, 'MainCompartment', 7),
       (2, 'Freezer', 14),
       (3, 'VegetableDrawer', 10),
       (4, 'MeatDrawer', 5);

-- Notifications
INSERT INTO `Notifications` (`NOTIFICATIONID`, `MESSAGEBODY`, `NOTIFICATIONCOUNT`)
VALUES (1, 'New notification', 0),
       (2, 'Reminder: Check your pantry stock', 0),
       (3, 'You have a new message', 0),
       (4, 'Reminder: Check your refrigerator', 0);

-- Receives
INSERT INTO `Receives` (`UserID`, `NotificationID`)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4);

-- MealSuggestion
INSERT INTO `MealSuggestion` (`MealID`, `Recipes`)
VALUES (1, 'Grilled Chicken Salad'),
       (2, 'Vegetarian Stir-Fry'),
       (3, 'Spaghetti Bolognese'),
       (4, 'Grilled Salmon with Lemon Butter Sauce');

-- BasedOn
INSERT INTO `BasedOn` (`LogEntryID`, `MealID`)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4);

-- ItemStorage
INSERT INTO `ItemStorage` (`ItemID`, `DeviceID`, `CompartmentName`, `ExpiryDate`, 'Count')
VALUES (1, 1, 'MainCompartment', '2023-11-30', 1),
       (2, 2, 'Freezer', '2023-12-15', 1),
       (3, 3, 'VegetableDrawer', '2023-12-10', 1),
       (4, 4, 'MeatDrawer', '2023-12-05', 1);

-- Contains
INSERT INTO `Contains` (`ItemID`, `GroceryList#`, `InventoryID`)
VALUES (1, 1, 1),
       (2, 2, 2),
       (3, 3, 3),
       (4, 4, 4);




