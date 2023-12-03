create table "FoodItem"
(
    "ItemID"         NUMBER        not null
        constraint FOODITEM_PK
            primary key,
    "ItemName"       VARCHAR2(100) not null,
    "FoodItemType"   VARCHAR2(50)  not null,
    "NutritionValue" VARCHAR2(255)
)
    /

create unique index FOODITEM_ITEMNAME_UINDEX
    on "FoodItem" ("ItemName")
    /


create table "User"
(
    USERID      NUMBER        not null
        primary key,
    USERNAME    VARCHAR2(100) not null
        unique,
    PHONENUMBER NUMBER        not null
        unique,
    EMAIL       VARCHAR2(100) not null
        unique
)
    /

create table "StorageDevice"
(
    "DeviceID" NUMBER not null
        constraint STORAGEDEVICE_PK
            primary key
)
    /

create table "Refrigerator"
(
    "DeviceID" NUMBER not null
        constraint REFRIGERATOR_PK
            primary key
        constraint REFRIGERATOR_STORAGEDEVICE__FK
            references "StorageDevice",
    "Serial#"  VARCHAR2(255),
    "Brand"    VARCHAR2(100),
    "Model#"   NUMBER
)
    /

create unique index REFRIGERATOR_MODEL#_UINDEX
    on "Refrigerator" ("Model#")
    /

create unique index REFRIGERATOR_SERIAL#_UINDEX
    on "Refrigerator" ("Serial#")
    /

create table "Pantry"
(
    "DeviceID"   NUMBER not null
        constraint PANTRY_PK
            primary key
        constraint PANTRY_STORAGEDEVICE__FK
            references "StorageDevice",
    "PantryName" VARCHAR2(100)
)
    /


create unique index PANTRY_PANTRYNAME_UINDEX
    on "Pantry" ("PantryName")
    /

create table "Temperature"
(
    "CompartmentName" VARCHAR2(50) not null,
    "Temperature"     FLOAT        not null,
    constraint TEMPERATURE_PK
        primary key ("CompartmentName")
)

    /

create table "Owns"
(
    "DeviceID" NUMBER not null
        constraint "Owns_DeviceID_fk"
            references "StorageDevice",
    "UserID"   NUMBER not null
        constraint "Owns_UserID_fk"
            references "User",
    constraint "Owns_PK"
        primary key ("UserID", "DeviceID")
)
    /

--- need revision---
create table "GroceryList"
(
    "GroceryListDate" NUMBER,
    "GroceryList#"    NUMBER not null
        constraint GROCERYLIST_PK
            primary key
)
    /

create table "Obtains"
(
    "UserID"   NUMBER not null
        constraint "Obtains_UserID_fk"
            references "User",
    "GroceryList#"   NUMBER not null
        constraint "Obtains_GroceryList#_fk"
            references "GroceryList",
    constraint "Obtains_PK"
        primary key ("UserID", "GroceryList#")

)
    /



create table "InventoryLog"
(
    "LogEntryID"   NUMBER
        constraint InventoryLog_pk
            primary key,
    "LogTimeVal"   NUMBER,
    "ItemCount"    NUMBER,
    "ItemID"    NUMBER
        constraint InventoryLog_ItemID_pk
            references "FoodItem"
)
    /
create table "Administrates"
(
    "UserID"   NUMBER not null

        constraint "Administrates_UserID_fk"
            references "User",
    "LogEntryID"   NUMBER not null
        constraint "Administrates_LogEntryID_fk"
            references "InventoryLog",

    constraint "Administrates_pk"
        primary key ("UserID", "LogEntryID")
)
    /

create table "Duration"
(
    "ItemID"          NUMBER       not null
        constraint "Duration_ItemID"
            references "FoodItem",
    "CompartmentName" VARCHAR2(50) not null
        constraint  "Duration_CompartmentName_fk"
        references "Temperature",
    "DurationInDays"  NUMBER       not null

)
    /

create unique index DURATION_PK
    on "Duration" ("ItemID")
    /

create table "Notifications"
(
    NOTIFICATIONID    NUMBER        not null
        primary key,
    MESSAGEBODY       VARCHAR2(100) not null,
    NOTIFICATIONCOUNT NUMBER
)
    /

create table "Receives"
(
    "UserID"         NUMBER not null
        constraint "Receives_UserID_fk"
            references "User",
    "NotificationID" NUMBER not null
        constraint "Receives_NotificationID_fk"
            references "Notifications",
    constraint "Receives_PK"
        primary key ("UserID", "NotificationID")
)
    /

create table "MealSuggestion"
(
    "MealID"  NUMBER not null
        constraint MEALSUGGESTION_PK
            primary key,
    "Recipes" VARCHAR2(300)
)
    /

create table "BasedOn"
(
    "LogEntryID" int not null
        constraint BASEDON_INVENTORYLOG_LOGENTRYID_FK
            references "InventoryLog",
    "MealID" int
        constraint BASEDON_PK
            primary key
        constraint BASEDON_MEALSUGGESTION_MEALID_FK
            references "MealSuggestion" ("MealID")
)
    /
--- end of revision---

create table "ItemStorage"
(
    "ItemID"          NUMBER
        constraint ITEMSTORAGE_FOODITEM_ITEMID_FK
            references "FoodItem",
    "DeviceID"        NUMBER
        constraint ITEMSTORAGE_STORAGEDEVICE_DEVICEID_FK
            references "StorageDevice",
    "CompartmentName" VARCHAR2(50) not null
        constraint ITEMSTORAGE_TEMPERATURE_COMPARTMENTNAME_FK
        references "Temperature",
    "ExpiryDate"      VARCHAR2(50) not null
)
    /

create table "Contains"
(
    "ItemID"   NUMBER not null
        constraint "Contains_ItemID_fk"
            references "FoodItem",
    "GroceryList#"   NUMBER not null
        constraint "Contains_GroceryList#_fk"
            references "GroceryList",
    "LogEntryID" NUMBER not null
        constraint "Contains_LogEntryID_fk"
            references "InventoryLog",

    constraint "Contains_PK"
        primary key ("ItemID", "GroceryList#")
);
/

-- FoodItem
INSERT INTO "FoodItem" VALUES (1, 'Apple', 'Fruit', 'Vitamin C, Fiber');
INSERT INTO "FoodItem" VALUES (2, 'Banana', 'Fruit', 'Potassium, Vitamin B6');
INSERT INTO "FoodItem" VALUES (3, 'Carrot', 'Vegetable', 'Vitamin A, Fiber');
INSERT INTO "FoodItem" VALUES (4, 'Salmon', 'Seafood', 'Omega-3 Fatty Acids, Protein');

-- User
INSERT INTO "User" VALUES (1, 'JohnDoe', '1234567890', 'john.doe@example.com');
INSERT INTO "User" VALUES (2, 'JaneDoe', '9876543210', 'jane.doe@example.com');
INSERT INTO "User" VALUES (3, 'MikeSmith', '5551234567', 'mike.smith@example.com');
INSERT INTO "User" VALUES (4, 'EmilyJohnson', '9998765432', 'emily.johnson@example.com');

-- StorageDevice
INSERT INTO "StorageDevice" VALUES (1);
INSERT INTO "StorageDevice" VALUES (2);
INSERT INTO "StorageDevice" VALUES (3);
INSERT INTO "StorageDevice" VALUES (4);
INSERT INTO "StorageDevice" VALUES (5);
INSERT INTO "StorageDevice" VALUES (6);
INSERT INTO "StorageDevice" VALUES (7);
INSERT INTO "StorageDevice" VALUES (8);

-- Refrigerator
INSERT INTO "Refrigerator" VALUES (1, 'ABC123', 'Samsung', 12345);
INSERT INTO "Refrigerator" VALUES (2, 'XYZ789', 'LG', 54321);
INSERT INTO "Refrigerator" VALUES (3, 'JKL456', 'Whirlpool', 67890);
INSERT INTO "Refrigerator" VALUES (4, 'MNO789', 'GE', 45678);

-- Pantry
INSERT INTO "Pantry" VALUES (5, 'KitchenPantry');
INSERT INTO "Pantry" VALUES (6, 'BasementPantry');
INSERT INTO "Pantry" VALUES (7, 'ClosetPantry');
INSERT INTO "Pantry" VALUES (8, 'GaragePantry');

-- Temperature
INSERT INTO "Temperature" VALUES ('MainCompartment', 4.0);
INSERT INTO "Temperature" VALUES ('Freezer', -18.0);
INSERT INTO "Temperature" VALUES ('VegetableDrawer', 8.0);
INSERT INTO "Temperature" VALUES ('MeatDrawer', 2.0);

-- Owns
INSERT INTO "Owns" VALUES (1, 1);
INSERT INTO "Owns" VALUES (2, 2);
INSERT INTO "Owns" VALUES (3, 3);
INSERT INTO "Owns" VALUES (4, 4);

-- GroceryList
INSERT INTO "GroceryList" VALUES (20231121, 1);
INSERT INTO "GroceryList" VALUES (20231122, 2);
INSERT INTO "GroceryList" VALUES (20231123, 3);
INSERT INTO "GroceryList" VALUES (20231124, 4);

-- Obtains
INSERT INTO "Obtains" VALUES (1, 1);
INSERT INTO "Obtains" VALUES (2, 2);
INSERT INTO "Obtains" VALUES (3, 3);
INSERT INTO "Obtains" VALUES (4, 4);

-- InventoryLog
INSERT INTO "InventoryLog" VALUES (1, 1637500000, 5, 1);
INSERT INTO "InventoryLog" VALUES (2, 1637580000, 3, 2);
INSERT INTO "InventoryLog" VALUES (3, 1637650000, 10, 3);
INSERT INTO "InventoryLog" VALUES (4, 1637720000, 3, 4);

-- Administrates
INSERT INTO "Administrates" VALUES (1, 1);
INSERT INTO "Administrates" VALUES (2, 2);
INSERT INTO "Administrates" VALUES (3, 3);
INSERT INTO "Administrates" VALUES (4, 4);

-- Duration
INSERT INTO "Duration" VALUES (1, 'MainCompartment', 7);
INSERT INTO "Duration" VALUES (2, 'Freezer', 14);
INSERT INTO "Duration" VALUES (3, 'VegetableDrawer', 10);
INSERT INTO "Duration" VALUES (4, 'MeatDrawer', 5);

-- Notifications
INSERT INTO "Notifications" VALUES (1, 'New notification', 0);
INSERT INTO "Notifications" VALUES (2, 'Reminder: Check your pantry stock', 0);
INSERT INTO "Notifications" VALUES (3, 'You have a new message', 0);
INSERT INTO "Notifications" VALUES (4, 'Reminder: Check your refrigerator', 0);

-- Receives
INSERT INTO "Receives" VALUES (1, 1);
INSERT INTO "Receives" VALUES (2, 2);
INSERT INTO "Receives" VALUES (3, 3);
INSERT INTO "Receives" VALUES (4, 4);

-- MealSuggestion
INSERT INTO "MealSuggestion" VALUES (1, 'Grilled Chicken Salad');
INSERT INTO "MealSuggestion" VALUES (2, 'Vegetarian Stir-Fry');
INSERT INTO "MealSuggestion" VALUES (3, 'Spaghetti Bolognese');
INSERT INTO "MealSuggestion" VALUES (4, 'Grilled Salmon with Lemon Butter Sauce');

-- BasedOn
INSERT INTO "BasedOn" VALUES (1, 1);
INSERT INTO "BasedOn" VALUES (2, 2);
INSERT INTO "BasedOn" VALUES (3, 3);
INSERT INTO "BasedOn" VALUES (4, 4);

-- ItemStorage
INSERT INTO "ItemStorage" VALUES (1, 1, 'MainCompartment', '2023-11-30');
INSERT INTO "ItemStorage" VALUES (2, 2, 'Freezer', '2023-12-15');
INSERT INTO "ItemStorage" VALUES (3, 3, 'VegetableDrawer', '2023-12-10');
INSERT INTO "ItemStorage" VALUES (4, 4, 'MeatDrawer', '2023-12-05');

-- Contains
INSERT INTO "Contains" VALUES (1, 1, 1);
INSERT INTO "Contains" VALUES (2, 2, 2);
INSERT INTO "Contains" VALUES (3, 3, 3);
INSERT INTO "Contains" VALUES (4, 4, 4);

